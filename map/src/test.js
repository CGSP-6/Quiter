//绘制两条线路
var myLines_1 = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines_1, {
    style: myStyle
}).addTo(map);

//循环绘制
//绘制各种marker，ref: https://blog.csdn.net/xtfge0915/article/details/80260493 
var markers=[[56,-3.2],[56,-3],[56,-3.1]]
for (i=0;i<markers.length;i++){
    L.marker(markers[i],{icon:greenIcon}).addTo(map)
}
