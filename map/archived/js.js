//本js是地图的主要功能实现
// here is the basic info of the map  地图基本信息配置
// Creating map options:center zoom // I can also use the setView
var mapOptions = {
    center: [55.94844, -3.18322], //初始化中心
    zoom: 16 //缩放层级
}
// set the osm 这里设置osm的基础数据 url 以及 右下角版权参数
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = 'Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';


// Creating a map object 创建地图，是一个容器，里面还没有东西，并命名为map
var map = new L.map('map', mapOptions);
// Creating a Layer object 创建图层
var layer = new L.TileLayer(osmUrl,{
    attribution: osmAttrib
});
//// 地图配置完成

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
  L.geoJSON(sample_json_point, {
    icon: greenIcon
  }).addTo(map);


  //添加线条
  L.geoJSON(myLines_school,{
    style: myStyle_quiet
  }).addTo(map);

  
  L.marker([55.95, -3.2], {icon: greenIcon}).addTo(map);






