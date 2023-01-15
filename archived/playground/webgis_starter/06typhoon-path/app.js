// 自定义版权信息（简单的html字符串）
var mapAttr =
  'Map data &copy; <a href="https://xiaozhuanlan.com/webgis/">《小专栏：WebGIS入门实战》</a> contributors, ' +
  '<a href="http://giscafer.com/">giscafer</a>, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

// mapbox 地图服务URL
var mapboxUrl =
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

// 定义两个图层，影像图层和街道图层（这里是有了mapbox地图服务）
var satellite = L.tileLayer(mapboxUrl, {
    id: 'mapbox.satellite',
    attribution: mapAttr
  }),
  streets = L.tileLayer(mapboxUrl, {
    id: 'mapbox.streets',
    attribution: mapAttr
  });
// 创建地图实例
var map = L.map('map', {
  center: [18.7, 119.3],
  zoom: 5,
  // 展示两个图层
  layers: [satellite, streets]
});

// 通过layer control来实现图层切换UI
// https://leafletjs.com/examples/layers-control/
var baseLayers = {
  影像图: satellite,
  街道图: streets
};
L.control.layers(baseLayers).addTo(map);

//  数据转换
var allpoints = dataHandler();
// 根据坐标点数组polylinePoints通过 L.polyline 方法 绘制折线，颜色为蓝色blue
polyline = L.polyline(allpoints, { color: 'blue' }).addTo(map);
// 这里注意，如果地图中心地位位置不对，可能绘制了折线看不到，所以这里获取折线的最外层矩形区域，进行缩放到折线范围
map.fitBounds(polyline.getBounds());
// polyline.snakeIn();
map.removeLayer(polyline);
animateDrawLine();

/* 数据转换 & 绘制折线图 */
// typhoonTestData变量是全局的台风数据对象，详细见./data.js文件
function dataHandler() {
  // 获取台风坐标点数据对象
  var forecast = typhoonTestData[0]['points'];
  // 定义折线点数据
  var polylinePoints = [];
  // 循环拼接数据[[经度，纬度],[经度,纬度]] 的格式
  for (var i = 0; i < forecast.length; i++) {
    var p = forecast[i];
    polylinePoints.push([Number(p['lat']), Number(p['lng'])]);
  }

  return polylinePoints;
}

// line
var lineLayer;
// Marker
var marker;
// icon
var typhoonIcon = L.icon({
  iconUrl: './typhoon.png',
  iconSize: [28, 28],
  iconAnchor: [10, 10]
});

// 获取台风信息，详细见./data.js文件数据
var land = typhoonTestData[0]['land'][0];

/* 动态绘制折线 */
function animateDrawLine() {
  // allpoints 是上边介绍的数据转换的结果
  var length = allpoints.length;
  // 定义用来存放递增元素的经纬度数据
  var drawPoints = [];
  var count = 0;
  // 定时器100ms，动态的塞入坐标数据
  var timer = setInterval(function() {
    if (count < length) {
      drawPoints.push(allpoints[count]);
      count++;
      // 清除之前绘制的折线图层
      if (lineLayer && count !== length) {
        map.removeLayer(lineLayer);
        lineLayer = null;
      }
      // 清除marker图层
      if (marker && count !== length) {
        map.removeLayer(marker);
        marker = null;
      }

      // 最新数据点drawPoints绘制折线
      lineLayer = L.polyline(drawPoints, { color: 'blue' }).addTo(map);

      // 根据最新数组最后一个点绘制marker
      if (count === length) {
        map.removeLayer(marker);
        // 如果是台风最后一个点，则自动popup弹窗
        marker = L.marker(drawPoints[length - 1], { icon: typhoonIcon })
          .addTo(map)
          .bindPopup(
            '<b>' +
              typhoonTestData[0]['name'] +
              '</b><br>' +
              land['info'] +
              '<br>' +
              land['landtime'] +
              '<br>经度：' +
              land['lng'] +
              '<br>纬度：' +
              land['lat'] +
              '<br>强度：' +
              land['strong'] +
              '<br><br><b>Author：giscafer<b>'
          )
          .openPopup();
      } else {
        marker = L.marker(drawPoints[count - 1], { icon: typhoonIcon }).addTo(
          map
        );
      }
    } else {
      // 取完数据后清楚定时器
      clearInterval(timer);
    }
  }, 100);
}
