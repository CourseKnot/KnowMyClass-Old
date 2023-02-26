from django.contrib import admin
from .models import Course, Department, Review, Professor_course

# Register your models here.

admin.site.register(Course)

class CourseInline(admin.TabularInline):
    model = Course
    fields = ('course_name',)
    extra = 1

class DepartmentAdmin(admin.ModelAdmin):
    inlines = [CourseInline]

admin.site.register(Department, DepartmentAdmin)

admin.site.register(Review)
admin.site.register(Professor_course)
