from rest_framework import serializers
from .models import Course, Department, Review, Professor_course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class Professor_courseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor_course
        fields = '__all__'