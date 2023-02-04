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
    course_name = models.CharField(max_length=255) # CMPSC 100: Computer Fundamentals and Applications
    description = models.TextField() # Introduction to computer fundamentals and applications to data processing environments.
    credit = models.CharField(max_length=50) # 3 CREDITS
    prerequisites = models.TextField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE) # Computer Science (CMPSC)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.course_name
    


# jsonout = {"prerequisite": ['Enforced Prerequisite at Enrollment: CMPSC 360 or MATH 311W', 
#                             'Cross-listed with: MATH 467',
#                             'Bachelor of Arts: Quantification']}