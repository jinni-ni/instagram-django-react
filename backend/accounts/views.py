from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView, ListAPIView, get_object_or_404
from .serializers import SignupSerializer, SuggestionUseSerializer
# Create your views here.

class SignupView(CreateAPIView):
    model = get_user_model()
    serializer_class = SignupSerializer
    permission_classes = [
        AllowAny,
    ]

class SuggestionListAPIView(ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = SuggestionUseSerializer

@api_view(['POST'])
def user_follow(request):
    username = request.data['username']
    get_object_or_404(User, user=username)
    pass

@api_view(['POST'])
def user_unfollow(request):
    pass
