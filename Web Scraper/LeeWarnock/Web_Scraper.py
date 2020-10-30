# Install requests-html via terminal: pip install requests-html
# Add website via URL variable below following this pattern: url = "https://example.com"
#Iterating over C0D1NG repos below:
url = https://github.com/C0D1NG?tab=repositories

#run by typing into the termanal: "python Web_Scraper.py"

import requests-html
import csv

from requests_html import HTMLSession
session = HTMLSession()

response = session.get(url)

container = response.html.find(“#user-repositories-list”, first=True)
list = container.find(“li”)

sheet = [[“Name”, “Language”]]

for item in list:
    elements = item.text.split(“\n”)
    name = elements[0]
    lang = elements[2]
    sheet.append([name, lang])

# Save data to .csv file
                               
with open(“Filename.csv”, “w”, newline=’’, encoding=’utf-8') as file:
    writer = csv.writer(file)
    writer.writerows(sheet)
