'''
Grab all undergraduate courses from bulletins.psu.edu
'''
import re
import requests
import json

# bulletin base url
base_url = 'https://bulletins.psu.edu'
base_html = requests.get(base_url+'/university-course-descriptions/undergraduate/')

# get subpage url
subpage_pattern = re.compile('/university-course-descriptions/undergraduate/[a-z]+/{1}')
sub_url_list = subpage_pattern.findall(base_html.text)
f = open('text.txt','w')
f.write(str(sub_url_list))