from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import *
from rest_framework import permissions
from django.http import request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny ,IsAuthenticated
# Create your views here.

# from .serializers import RegisterSerializer

class registerview(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Calls create() in the serializer
            return Response({'message': 'User created'}, status=201)
        return Response(serializer.errors, status=400)

class loginview(APIView):
    

    def post(self, request):
        serializer = loginserializer(data=request.data)
        if serializer.is_valid():
            return Response({
                "data": serializer.data
            })
        return Response(serializer.errors, status=400)
    


class dashboard(APIView):
    permission_classes=[IsAuthenticated]
    

    def get(Self,request ):
        user = request.user
        return Response({
            "status":"sucess",
            "user":user,
        })
    
# //creating the view for gettign the  file 