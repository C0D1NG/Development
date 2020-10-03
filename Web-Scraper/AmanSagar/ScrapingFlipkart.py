import requests 
from bs4 import BeautifulSoup
from flask import Flask, request, render_template
from imgscrape import imgscrape

lontc = ["_2cLu-l", "_2mylT6", "_3wU53n"]     #name tag classes
loptc = ["_1vC4OE", "_2rQ-NK"]                #price tag classes
lortc = ["hGSR34"]                            #rating tag classes
locdc = ["IIdQZO",  "_1SSAGr", "_3liAhj", "_1UoZlX", "_2Vsm67"]   #container division classes

def getflip(category):
    
    fpl = []
    
    
    url = f"https://www.flipkart.com/search?q={category}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
    
    data = requests.get(url)
    
    soup = BeautifulSoup(data.text)
    
    locdt = soup.find_all('div', class_ = locdc)
    
    i = 0;
    
    for div in locdt:
        if i < 3:

            nametag = div.find(class_ = lontc)
            pricetag = div.find(class_ = loptc)
            ratingtag = div.find(class_ = lortc)
            anchorhref = div.find('a').get('href')
            image = imgscrape("https://www.flipkart.com" + anchorhref, path= pathtodriver)


            if(ratingtag == None):
                rating = "N.A."
            else:
                rating = ratingtag.text

            fpl.append({
                        "name": nametag.text,
                        "price": pricetag.text,
                        "rating": rating,
                        "href": ("https://www.flipkart.com" + anchorhref),
                        "image": image[0]
            })
            
        i += 1
                
    return fpl

getflip(input("Enter what you want to search for: "))