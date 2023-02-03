from django.shortcuts import render
from .models import Course, Department
from rest_framework import viewsets   
from .serializers import CourseSerializer          

# Create your views here.
class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()