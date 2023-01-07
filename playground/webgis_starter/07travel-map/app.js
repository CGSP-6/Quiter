/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2018-12-26 18:41:55
 * @description: 旅游地图相册Demo，https://xiaozhuanlan.com/webgis
 */

// 地图中心点，陕西
var centerPoint = [35.63452, 109.132287];

// 创建地图
var map = L.map('map', {
  center: centerPoint,
  zoom: 5,
  minZoom: 1,
  maxZoom: 16,
  attributionControl: !1
});

// 创建图层
var mapServerUrl =
  'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}';
L.tileLayer(mapServerUrl, {
  opacity: 1,
  zIndex: 0
}).addTo(map);

// 自定义版权信息（简单的html字符串）
var attr = L.control.attribution();
attr.addAttribution('旅游地图相册Demo——那些我去过的城市');
attr.addAttribution(
  '<a href="http://giscafer.com" target="_blank">@giscafer</a>'
);
attr.addTo(this.map);

// 获取数据
$.get('./data/data.json', function(result) {
  console.log(result);
  drawFootPoint(result.rows);
});

// marker icon
// 图标icon介绍两个网站可以下载:www.iconfont.cn 和 www.easyicon.net
var footIcon = L.icon({
  iconUrl: './foot.png',
  iconSize: [28, 28],
  iconAnchor: [10, 10]
});

/* 根据坐标点数据绘制Marker */
function drawFootPoint(data) {
  for (var i = 0; i < data.length; i++) {
    var p = data[i];
    // 注意marker接受参数格式 [纬度，经度]
    var point = [p.latitude - 0, p.longitude - 0];
    L.marker(point, { icon: footIcon })
      .addTo(map)
      // 每个marker动态获取remark等信息，绑定弹窗
      .bindPopup(
        '<h3>' +
          p['city'] +
          '</h3>' +
          p['date'] +
          '<br>' +
          p['remark'] +
          '<br>' +
          generatePicHtml(p.imgs)
      );
  }
}

/**
 * veiwerjs预览大图
 */
function viewPic() {
  var galley = document.getElementById('galley');
  var viewer = new Viewer(galley, {
    url: 'data-original',
    hidden: function() {
      viewer.destroy();
    }
  });
  viewer.show();
}

/**
 * 动态拼接html字符串
 * @param {string} cityName 城市名称
 * @param {*} imgs 足迹点数据中的imgs数组
 */
function generatePicHtml(imgs) {
  imgs = imgs || [];
  // 动态拼接html字符串
  var _html = '<div id="galley"><ul class="pictures"  onclick="viewPic()">';
  // 循环图片数组，动态拼接项目的相对地址url
  for (var i = 0; i < imgs.length; i++) {
    var url = './data/pictures/' + imgs[i];
    var display = 'style="display:inline-block"';
    // 这里
    if (i > 5) {
      display = 'style="display:none"';
    }
    _html +=
      '<li ' +
      display +
      '><img data-original="' +
      url +
      '" src="' +
      url +
      '" alt="图片预览"></li>';
  }
  _html += '</ul></div></div>';

  return _html;
}

/* function generatePicHtml(cityName, urls) {
    var _html = '<div id="galley"><ul class="pictures" onclick="viewPic(\'' + cityName + '\')">';
    for (var i = 0; i < urls.length; i++) {
        var url = './data/pictures/' + urls[i];
        var display = 'style="display:inline-block"';
        if (i > 5) {
            display = 'style="display:none"';
        }
        _html += '<li ' + display + '><img data-original="' + url + '" src="' + url + '" alt="图片预览"></li>';
    }
    _html += '</ul></div></div>';

    return _html;
} */
