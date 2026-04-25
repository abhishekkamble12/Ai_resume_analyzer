from django.urls import path
from .views import pdfupload, HealthCheckView

urlpatterns = [
    path('upload-pdf/', pdfupload.as_view(), name='upload-pdf'),
    path('analyze-resume/', pdfupload.as_view(), name='analyze-resume'),
    path('health/', HealthCheckView.as_view(), name='health-check'),
]
