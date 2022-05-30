#!/bin/python3

import math
import os
import random
import re
import sys
from requests import get
import json
#
# Complete the 'topArticles' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts INTEGER limit as parameter.
# base url for copy/paste:
# https://jsonmock.hackerrank.com/api/articles?page=<pageNumber>
#
def topArticles(limit):
    # Write your code here
    page = 0
    result = []
    while True:
        page += 1
        res = get(f'https://jsonmock.hackerrank.com/api/articles?page={page}')
        articles_data = res.json()['data']
        
        if not articles_data:
            break

        for article in articles_data:
            atc_info = dict()
            if article['title'] is None and article['story_title'] is None:
                continue
            elif article['title'] is None:
                atc_info['title'] = article['story_title']
            else:
                atc_info['title'] = article['title']
            if article['num_comments'] is None:
                atc_info['num_comments'] = 0
            else:
                atc_info['num_comments'] = article['num_comments']
                
            result.append(atc_info)

    answer = sorted(result, key= lambda x: (-x['num_comments'], x['title']))[:limit]
    # answer = sorted(result, key= lambda x: (-x['num_comments']))[:limit]
    # sorted_comments = sorted(comments, key=lambda el: (el['num_comments'] if el['num_comments'] else 0), reverse=True)

    return [x['title'] for x in answer]

print(topArticles(10))

# ['UK votes to leave EU', 'F.C.C. Repeals Net Neutrality Rules', 'EU approves internet copyright law, including ‘link tax’ and ‘upload filter’', 'Switch from Chrome to Firefox', 'W3C abandons consensus, standardizes DRM, EFF resigns', 'Tim Cook Speaks Up', 'A Message to Our Customers']