from django.db import models

# Create your models here.
    
class Department(models.Model):
    department_id = models.AutoField(primary_key=True)
    department_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.department_name
    
class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    course_name = models.CharField(max_length=255)
    credits = models.CharField(max_length=100)
    description = models.TextField(null=True)
    prerequisites = models.TextField(null=True)
    other = models.TextField(null=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

class Comment(models.Model):
    comment_id = models.AutoField(primary_key=True)
    description = models.TextField(null=True)

    def __str__(self):
        return self.description

    
