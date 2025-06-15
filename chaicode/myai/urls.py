

from django.urls import path,include
from .views import pdfupload

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('upload-pdf/', pdfupload.as_view(), name='upload-pdf'),
] 
