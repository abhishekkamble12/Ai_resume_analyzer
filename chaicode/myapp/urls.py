# from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path('sign/',registerview.as_view(),name="signup"),
    path('login/',loginview.as_view(),name="login"),
    path('dash/',loginview.as_view(),name="login"),

   
]
