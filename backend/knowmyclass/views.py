from django.shortcuts import render
from .models import Course, Department, Review, Professor_course
from rest_framework import viewsets   
from .serializers import CourseSerializer, DepartmentSerializer, ReviewSerializer, Professor_courseSerializer

# Create your views here.
class DepartmentView(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()

class ReviewView(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

class Professor_courseView(viewsets.ModelViewSet):
    serializer_class = Professor_courseSerializer
    queryset = Professor_course.objects.all()
