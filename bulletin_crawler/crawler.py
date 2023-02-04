'''
Grab all undergraduate courses from bulletins.psu.edu
'''
import re
import requests
import json
from bs4 import BeautifulSoup

# undergraduate bulletin base url
base_url = 'https://bulletins.psu.edu/university-course-descriptions/undergraduate/'
base_html = requests.get(base_url)

# get subpage url
department_pattern = re.compile('/university-course-descriptions/undergraduate/([a-z]+)/{1}')
department_list = department_pattern.findall(base_html.text)

# write department list (abbrev)
f = open('./bulletin_crawler/department_list.txt','w')
for dep in department_list:
    f.write(dep+'\n')
f.close()

# access each departments
for i in range(1):
    dep_html = requests.get(base_url+'cmpsc/') # retrieve html source code
    soup = BeautifulSoup(dep_html.text,"html.parser") # parse html using bs
    courses = soup.find_all('div', class_='courseblock') # find all course block

    # setup a dict for each course
    f = open('test.txt','w')
    course_list = []
    for course in courses:
        course_info = {}
        # title
        title_block = course.find('div', {'class': 'course_code'})
        course_info['department'] = title_block.find('span', text=re.compile('[a-zA-Z]+')).text
        course_info['number'] = title_block.find('span', text=re.compile('[0-9]+[a-zA-Z]*')).text
        # credits
        course_info['credits'] = course.find('div', class_='course_credits').text.strip()
        # description
        descr_block = course.find('div', class_='courseblockdesc')
        course_info['description'] = descr_block.find('p').text.strip()
        # extra
        extra_blocks = course.find_all('div', class_="noindent courseblockextra")

        for block in extra_blocks:
            requirements = block.find('strong')
            # if the content is about enrollment requirements
            if requirements:
                if 'Prerequisite' in requirements.text:
                    if requirements.find_next_sibling(): # has non-text descriptions
                        course_info['prerequisite'] = requirements.find_next_sibling().text.strip()
                    else:
                        course_info['prerequisite'] = requirements.find_next_sibling(text=True).text.strip()
                elif 'Concurrent' in requirements:
                    course_info['concurrent'] = requirements.find_next_sibling().text.strip()
            else:
                info_list = []                    
                sub_blocks = block.find_all('p', class_="noindent")
                info_list = [x.text for x in sub_blocks]
                course_info['other'] = info_list
        
        course_list.append(course_info)
    
    f = open('./bulletin_crawler/cmpsc.json','w')
    json.dump(course_list,f)
    f.close()
    '''
    ### Pure regex version ###
    course_pattern = '<div class="courseblocktitle clearfix".+?[</div>]{n}'
    courses = re.findall(course_pattern,dep_html.text,re.S)
    # get title (department+number)
    title_pattern = re.compile('<div class="course_code"><span>(.*)</span>\n<span>(.*)</span></div>')
    title = title_pattern.findall(dep_html.text)
    # get credits
    credits_pattern = re.compile('<div class="course_credits">\n\t{3}(.*)')
    credits = credits_pattern.findall(dep_html.text)[::2] # all credits info are duplicated twice in the websites
    # get description
    descr_pattern = re.compile('<div class="courseblockdesc">\n\t{3}<p>\n\t{4}([^(<)]*)')
    descr = descr_pattern.findall(dep_html.text)
    '''
