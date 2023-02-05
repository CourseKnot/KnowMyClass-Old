'''
Grab all undergraduate courses from bulletins.psu.edu
'''
import re
import requests
import json
from bs4 import BeautifulSoup
import os

# Undergraduate bulletin base url
base_url = 'https://bulletins.psu.edu/university-course-descriptions/undergraduate/'

""" SAVE DIR """
save_dir = "./course_data"
os.makedirs(save_dir, exist_ok=True)

# Grab a dict of {Department_name (ABBREV): abbrev}
def get_department_dict():
    base_html = requests.get(base_url)
    soup = BeautifulSoup(base_html.content,"html.parser")

    # Get abbreviation
    abbrev_pattern = re.compile('/university-course-descriptions/undergraduate/([a-z]+)/{1}')
    abbrev_list = abbrev_pattern.findall(base_html.text)

    soup = BeautifulSoup(base_html.content,"html.parser")
    raw_list = soup.find_all('a', href=re.compile('/university-course-descriptions/undergraduate/([a-z]+)/{1}'))
    dep_list = [x.text for x in raw_list]
    department_dict = {dep_list[x]: abbrev_list[x] for x in range(len(dep_list))}
    return department_dict

# Grab all courses under the given department
def get_all_course(department_abbrev):
    dep_html = requests.get(base_url+department_abbrev+'/') # retrieve html source code
    soup = BeautifulSoup(dep_html.content,"html.parser") # parse html using bs
    courses = soup.find_all('div', class_='courseblock') # find all course block
    return courses

# Extract course info from a given course
def get_course_info(course,department):
    course_info = {}
    # Title
    course_info['course_name'] = course.find('div', class_='course_codetitle').text.strip()
    course_info['department'] = department
    '''
    ### Course name with seperate title and number ###
    title_block = course.find('div', {'class': 'course_code'})
    if title_block.find('span', text=re.compile('[0-9]+[a-zA-Z]*')): # there are courses without number
        course_info['number'] = title_block.find('span', text=re.compile('[0-9]+[a-zA-Z]*')).text
    '''
    # Credits
    course_info['credits'] = course.find('div', class_='course_credits').text.strip()
    # Description
    descr_block = course.find('div', class_='courseblockdesc')
    if descr_block: # there are courses w/ no description
        course_info['description'] = descr_block.find('p').text.strip()
    # Extra
    extra_blocks = course.find_all('div', class_="noindent courseblockextra")

    for block in extra_blocks:
        requirements = block.find('strong')
        # If the content is about enrollment requirements
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
            info_list = [x.text.strip() for x in sub_blocks]
            course_info['other'] = info_list
    return course_info


if __name__ == '__main__':
    department_dict = get_department_dict()
    # Write department list
    f = open('department_list.txt','w')
    for dep in department_dict.keys():
        f.write(dep+'\n')
    f.close()

    # Access each department
    for department in department_dict.keys():
        courses = get_all_course(department_dict[department])
        course_list = []
        for course in courses:
            course_list.append(get_course_info(course,department))

        # Write to file
        path = 'course_data/{}.json'.format(department_dict[department])
        f = open(path,'w')
        json.dump(course_list,f,ensure_ascii=False)
        f.close()