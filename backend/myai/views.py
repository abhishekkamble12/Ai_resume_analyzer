import os
import tempfile
import logging

from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .AI_reume import process_pdf_with_langchain

logger = logging.getLogger(__name__)


class HealthCheckView(APIView):
    """Simple health check endpoint for the frontend."""
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response({'status': 'healthy'}, status=status.HTTP_200_OK)


class pdfupload(APIView):
    parser_classes = [FormParser, MultiPartParser]
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        # Accept both 'pdf' and 'file' field names (frontend compatibility)
        pdf_file = request.FILES.get('pdf') or request.FILES.get('file')

        if not pdf_file:
            return Response(
                {'error': 'No PDF file provided. Send a file with field name "pdf" or "file".'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Validate file type
        if not pdf_file.name.lower().endswith('.pdf'):
            return Response(
                {'error': 'Only PDF files are accepted.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        temp_path = None
        try:
            # Save uploaded file to a temp file
            with tempfile.NamedTemporaryFile(delete=False, suffix='.pdf') as temp:
                for chunk in pdf_file.chunks():
                    temp.write(chunk)
                temp.flush()
                temp_path = temp.name

            # Process with AI
            result = process_pdf_with_langchain(temp_path)

            return Response({
                'result': result,
                'filename': pdf_file.name,
                'status': 'success',
            }, status=status.HTTP_200_OK)

        except ValueError as e:
            logger.error(f"Validation error processing PDF: {e}")
            return Response(
                {'error': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            logger.error(f"Error processing PDF: {e}", exc_info=True)
            return Response(
                {'error': f'Failed to analyze resume: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        finally:
            # Clean up temp file
            if temp_path and os.path.exists(temp_path):
                try:
                    os.unlink(temp_path)
                except OSError:
                    pass
