#!/usr/bin/env python3
import cgitb
import cgi
import folium
import cx_Oracle
cgitb.enable()
from jinja2 import Environment, FileSystemLoader

# some interesting locations
drummondSt = [55.948162, -3.184111]
kb = [55.923998, -3.174950]

# use the html template
def print_html():
    env = Environment(loader=FileSystemLoader('.'))
    temp = env.get_template('quiter.html')
    inpFol = foliumMap()
    print(temp.render(map=inpFol))
# init the map
def foliumMap():
    # this create a map
    map_l = folium.Map(location=drummondSt,zoom_start=17)
    with open("../../../oracle",'r') as pwf:
        pw = pwf.readline().strip()
        dsn = pwf.readline().strip()
        un = pwf.readline().strip()
    # connect with database
    conn = cx_Oracle.connect(un+"/"+pw+"@"+dsn)
    c = conn.cursor()
    c.execute("select TYPE,LAT_Y,LON_X from cgsp_point")
    # get the value and add to map
    for row in c:
        if row[0] == 1:
            folium.Marker(row[1:],icon=folium.Icon(color='green'),popup='Here is quieter').add_to(map_l)
        else:
            folium.Marker(row[1:],icon=folium.Icon(color='red'),popup='here is noisy').add_to(map_l)
    conn.close()
    # define a style for line
    def style_function(feature):
        return {'color':'#2E8B57',
        'weight':6
           }
    # get the line data from geojson
    folium.GeoJson(
        '../../cgsp/Quiter/map/src/geojson/line.json',
        style_function=style_function,
        name='geojson'
    ).add_to(map_l)
    return map_l.get_root().render()
if __name__ == '__main__':
    print_html()