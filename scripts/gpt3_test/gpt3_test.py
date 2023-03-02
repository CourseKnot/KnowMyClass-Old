import os
import openai
import json
from django.db import IntegrityError
import sys
import django

project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.join(project_root, '../../backend'))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
django.setup()

from knowmyclass.models import Professor_course, Course

# Load your API key
openai.api_key_path = 'userkey'


with open('comments.txt', 'r') as file:
    sum_str = ''
    for comment in file:
        if comment in  ['\n','\r\n']:
            continue
        comment_sum = openai.Completion.create(model="text-davinci-003", prompt='Summarize the comment in short:\n'+comment, temperature=0, max_tokens=1000)
        sum_str += comment_sum['choices'][0]['text'].strip()
    response = openai.Completion.create(model="text-davinci-003", prompt='Summarize all the comments in short:\n'+sum_str, temperature=0, max_tokens=1000)
    print(response['choices'][0]['text'].strip())
    summary = response['choices'][0]['text'].strip()

try:
    review_summary = Professor_course(course_summary=summary)
    existing_course = Professor_course.objects.get(course=Course.objects.get(course_name="CMPSC 465: Data Structures and Algorithms"))
    existing_course.course_summary = review_summary.course_summary
    existing_course.save()
    print("Summary updated in database.")
except IntegrityError as e:
    print("Error saving summary: {}".format(e))

