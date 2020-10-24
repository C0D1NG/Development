# This file will add the UTM-parameters 
# to the given url  
# UTM - Urchin Tracking Module

url = input("Enter the URL: ")

# UTM parameters
utm_source = input("Enter the Campaign Source: ")   # Mandatory parameter
utm_medium = input("Enter the Campaign Medium: ")
utm_campaign = input("Enter the Campaign Name: ")

generated_url = url

#  To identify a search engine, newsletter name, or other source
if utm_source:
    generated_url = generated_url + '?utm_source=' + utm_source

    #  To identify a medium such as email or cost-per-click
    if utm_medium:
        generated_url = generated_url + '&utm_medium=' + utm_medium
    
    # To identify a specific product promotion or strategic campaign
    if utm_campaign:
        generated_url = generated_url + '&utm_campaign=' + utm_campaign

    
    print("Gnerated URL : " + generated_url)

else:
    print("UTM source cannot be empty")
