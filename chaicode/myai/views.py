from django.shortcuts import render
from rest_framework.parsers import FormParser ,MultiPartParser
from rest_framework.views import APIView
from rest_framework.response import Response
import tempfile
from .AI_reume import process_pdf_with_langchain
 
# ...existing code...
class pdfupload(APIView):
    parser_classes = [FormParser, MultiPartParser]

    def post(self, request, *args, **kwargs):
        pdf_file =request.FILES.get('pdf')
        if not pdf_file :
            return Response ({"Error no such file "})
        # //creating the temp file  
        with tempfile.NamedTemporaryFile(delete=False,suffix ='.pdf',) as temp : #context maangaer which will delte it after viewing once
            for chunk in pdf_file.chunks() :
                temp.write(chunk)
                temp_path = temp.name
                temp.flush()
        result =process_pdf_with_langchain(temp_path)
        return Response (
            {
                "result" : result
            }
        )
        
        

# ...existing code...
