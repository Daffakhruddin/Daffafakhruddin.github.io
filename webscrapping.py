# import package requests dan BeautifulSoup
import requests
import json
from bs4 import BeautifulSoup
from datetime import datetime

# request ke website
page = requests.get("https://www.republika.co.id/")

# Extract konten menjadi  objek BeautifulSoup
obj = BeautifulSoup(page.text, 'html.parser');

#import json
print ('Menyimpan headline pada file json')
print ('===================================')
import json
data=[]
f=open('.\headline.json','w')
for headline in obj.find_all('div',class_='container-lit'):
    for headline in obj.find_all('li',class_='list-group-item list-border conten1'):
        data.append({"judul":headline.find('h3').text.strip(),"kategori":headline.find('span',class_='kanal-info').text.strip(),"waktu_publish":headline.find('div',class_='date').text.strip().replace(headline.find('span',class_='kanal-info').text,'').strip(' - '),"waktu_scrapping":datetime.now().strftime("%d/%m/%Y, %H:%M:%S")})
jdumps=json.dumps(data)
f.writelines(jdumps)
f.close()