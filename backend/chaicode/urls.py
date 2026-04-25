"""
URL configuration for chaicode project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
"""
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapp.urls')),
    path('api/', include('myai.urls')),
    # Keep legacy route for backward compatibility
    path('upload-pdf/', include('myai.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
