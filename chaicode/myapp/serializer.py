from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import request
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
# from rest_framework_simplejwt.tokens import Token
from rest_framework.response import Response


# //creating the the signup or django regirste user view 
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        token, created = Token.objects.get_or_create(user=user)
        return user

class loginserializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return {
                "username": username,
                "token": str(token)
            }
        raise serializers.ValidationError("Invalid credentials")

            
