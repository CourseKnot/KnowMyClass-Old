'''
Grab all undergraduate courses from bulletins.psu.edu
'''
import re
import requests
import json

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
# for i in range(2):
#     info_dict = {}
#     sub_html = requests.get(base_url+sub_url_list[i])
#     title_pattern = re.compile('<div class="course_codetitle">.+')