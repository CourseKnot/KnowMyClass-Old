from django.shortcuts import render
from .models import Course, Department, University
from rest_framework import viewsets   
from .serializers import CourseSerializer                 



class CourseView(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()



def course_list(request):
    courses = Course.objects.all()
    return render(request, 'courses.html', {'courses': courses})

def department_list(request):
    departments = Department.objects.all()
    return render(request, 'departments.html', {'departments': departments})

def university_list(request):
    universities = University.objects.all()
    return render(request, 'universities.html', {'universities': universities})
