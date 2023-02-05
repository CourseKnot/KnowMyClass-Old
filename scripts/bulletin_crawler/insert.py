import os
import json
from django.db import IntegrityError
import sys
import django

project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.join(project_root, '../../backend'))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
django.setup()

from knowmyclass.models import Course, Department

path = "./course_data"

for filename in os.listdir(path):
    if filename.endswith(".json"):
        file_path = os.path.join(path, filename)
        print("processing:", file_path)
        with open(file_path, "r") as f:
            data = json.load(f)
            for course_data in data:
                # try:
                department, created = Department.objects.get_or_create(department_name=course_data.get("department"))
                course, created = Course.objects.get_or_create(
                    course_name=course_data.get("course_name"),
                    credits=course_data.get("credits"),
                    description=course_data.get("description"),
                    prerequisites=course_data.get("prerequisite"),
                    other=course_data.get("other"),
                    department=department
                )
                # except IntegrityError:
                #     continue
