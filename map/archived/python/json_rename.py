# Python program to read 
# json file 
   
   
import json 
   
# Opening JSON file 
f = open('test.json',) 
   
# returns JSON object as  
# a dictionary 
data = json.load(f) 
   
# Iterating through the json 
# list 
for i in data['features']: 
    print("insert into cgsp_point(id,type,lon_x,lat_y) values(cgsp_point_seq.nextval,"+str(i['properties']['type'])+","+str(i['geometry']['coordinates'][0])+","+str(i['geometry']['coordinates'][1])+");")
   
# Closing file 
f.close()