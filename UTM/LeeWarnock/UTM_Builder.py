#Create a UTM builder having parameters utm_source, utm_medium, utm_campaign.

url=input("Enter the website url (e.g. https://www.example.com): ")
utm_source=input("Enter the Campaign Source (e.g. facebook, google): ")
utm_medium=input("Enter the campaign medium (e.g. email, cpc, banner): ")
utm_campaign=input("Enter campaign name (e.g. blackFriday_sale): ")

generated_url=url

if utm_source:
    generated_url=generated_url+'?utm_source='+utm_source
    if utm_medium:
        generated_url=generated_url+'&utm_medium='+utm_medium
    if utm_campaign:
        generated_url=generated_url+'&utm_campaign='+utm_campaign
    print("\n")
    print("Generated url is:""\n"+ generated_url)
else:
    print("\n")
    print("ERROR: PLease enter website URL (e.g. https://www.example.com): ")
