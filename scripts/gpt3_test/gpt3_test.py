import os
import openai

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