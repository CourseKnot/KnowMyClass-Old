import re
import requests
import json
from bs4 import BeautifulSoup
import os

if __name__ == '__main__':
    base_html = requests.get('https://thecourseforum.com/course/603/7735/')
    soup = BeautifulSoup(base_html.content,"html.parser")
    comment_block = soup.find_all('div', class_='review-text-full')
    comment_list  = []
    for comment in comment_block:
        comment_list.append(comment.text)
    with open('output.txt', 'w') as file:
        file.write(str(comment_list))
    print("Comments count: {}".format(len(comment_list)))