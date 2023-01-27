from django.urls import path
from .views import course_list, department_list, university_list

app_name = 'courses_app'
urlpatterns = [
    path('courses/', course_list, name='course_list'),
    path('departments/', department_list, name='department_list'),
    path('universities/', university_list, name='university_list'),
]
