from django.shortcuts import render
from .models import Course, Department
from rest_framework import viewsets   
from .serializers import CourseSerializer, DepartmentSerializer

# Create your views here.
class DepartmentView(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

