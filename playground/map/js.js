
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

// Adding layer to the map 添加一个marker
map.addLayer(layer);
var marker = L.marker([55.94844, -3.18322]).addTo(map);

//添加一个定位
lc = L.control
  .locate({
    strings: {
      title: "Locate myself"
    }
  })
  .addTo(map);

  //使用geoJson 添加一组点
  L.geoJSON(sample_json).addTo(map);

  
  L.geoJSON(myLines).addTo(map);

