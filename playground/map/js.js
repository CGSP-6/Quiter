
// here is the basic info of the map  地图基本信息
// Creating map options:center zoom // I can also use the setView
var mapOptions = {
    center: [55.94844, -3.18322],
    zoom: 16
}
// set the osm
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = 'Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';


// Creating a map object 创建地图
var map = new L.map('map', mapOptions);
// Creating a Layer object 创建图层
var layer = new L.TileLayer(osmUrl,{
    attribution: osmAttrib
});

//创建一些带有颜色的marker
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
//红色的marker 
var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

//设置geojson的颜色 https://leafletjs.com/examples/geojson/ 
var myStyle_geojson = {
  "color": "#ff7800",
  "weight": 5,
  "opacity": 0.65
};


// Adding layer to the map 添加一个marker
map.addLayer(layer);
var marker = L.marker([55.94844, -3.18322],{icon: greenIcon}).addTo(map);

//添加一个定位
lc = L.control
  .locate({
    strings: {
      title: "Locate myself"
    }
  })
  .addTo(map);

  //使用geoJson 添加一组点
  L.geoJSON(sample_json, {
    style: myStyle_geojson
  }).addTo(map);
  //添加线条
  L.geoJSON(myLines).addTo(map);


   
  L.marker([55.95, -3.2], {icon: greenIcon}).addTo(map);


  ///测试


  var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);
