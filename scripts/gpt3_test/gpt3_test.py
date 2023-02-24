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

from knowmyclass.models import Comment

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
        comment = Comment(description=summary)
        comment.save()
        print("Summary saved to database.")
    except IntegrityError as e:
        print("Error saving summary: {}".format(e))
