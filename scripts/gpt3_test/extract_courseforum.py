import requests
from bs4 import BeautifulSoup

output_dir = 'comments.txt'
url = 'https://thecourseforum.com/course/603/7735/'

# extract all comments from the url (thecourseforum.com)
def extract_comments():
    base_html = requests.get(url)
    soup = BeautifulSoup(base_html.content,"html.parser")
    comment_block = soup.find_all('div', class_='review-text-full')
    res = [comment.text for comment in comment_block]
    return res

if __name__ == '__main__':
    comment_list = extract_comments()
    print("Comments count: {}".format(len(comment_list)))

    # write to file
    with open(output_dir, 'w') as file:
        for comment in comment_list:
            file.write(comment+'\n')