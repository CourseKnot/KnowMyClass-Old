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

    def __str__(self):
        return self.course_name

class Professor_course(models.Model):
    professor_course_id = models.AutoField(primary_key=True)
    course_name = models.ForeignKey(Course, on_delete=models.CASCADE)
    course_overall_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    professor_overall_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    difficulty_overall_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    course_summary = models.TextField(null=True)
    professor_summary = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    def __str__(self):
        return self.course_name.course_name

class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    professor_course = models.ForeignKey(Professor_course, on_delete=models.CASCADE)
    course_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    professor_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    difficulty_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    course_review = models.TextField(null=True)
    professor_review = models.TextField(null=True)
    suggestion_review = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    def __str__(self):
        return str(self.professor_course.course_name.course_name + " -> Review: " + str(self.review_id))


    
