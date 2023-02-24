import re
import requests
import json
from bs4 import BeautifulSoup
import os

output_dir = 'output.txt'
url = 'https://thecourseforum.com/course/603/7735/'

def extract_comments():
    base_html = requests.get(url)
    soup = BeautifulSoup(base_html.content,"html.parser")
    comment_block = soup.find_all('div', class_='review-text-full')
    res = [comment.text for comment in comment_block]
    return res

if __name__ == '__main__':
    comment_list = extract_comments()
    
    print("Comments count: {}".format(len(comment_list)))
    with open(output_dir, 'w') as file:
        file.write(str(comment_list)) 