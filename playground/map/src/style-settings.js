//下面是个性化设置
//点
//创建一些带有颜色的marker
//绿色的marker 表示安静区域
var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  //红色的marker 表示噪音区域
  var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  //线路
  //路径颜色配置//设置geojson的颜色 https://leafletjs.com/examples/geojson/ 
  //安静区域的颜色
  var myStyle_quiet = {
    "color": "#3CB371",
    "weight": 10,
    "opacity": 0.65
  }
  //噪音区域的颜色，适用于线条颜色捕捉器：https://www.sioe.cn/yingyong/yanse-rgb-16/ 
  var myStyle_noise = {
    "color": "#DC143C",
    "weight": 10,
    "opacity": 0.65
  };
  
  