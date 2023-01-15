/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2019-05-29 14:04:30
 * @description: openlayers实现雨量分布demo，https://xiaozhuanlan.com/webgis
 */

import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector.js';
import Map from 'ol/Map';
import { fromLonLat, getTransform } from 'ol/proj.js';
import VectorSource from 'ol/source/Vector.js';
import XYZ from 'ol/source/XYZ';
import { Fill, Stroke, Style, Text } from 'ol/style.js';
import View from 'ol/View';

// 雨水等级
var rainLevel = {
  0: '小雨',
  2.5: '小雨',
  5: '小雨',
  10: '中雨',
  25: '大雨',
  50: '暴雨',
  100: '大暴雨',
  250: '特大暴雨'
};
var imageBounds = [],
  CloudLayer;

/**
 * 根据雨量大小定义矢量图层显示样式
 *
 */
function genStyle(g) {
  var style = new Style({
    fill: new Fill({
      color: 'rgba(' + g + ', 0.6)'
    }),
    stroke: new Stroke({
      color: '#319FD3',
      width: 1
    }),
    text: new Text({
      font: '12px Calibri,sans-serif',
      fill: new Fill({
        color: '#000'
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 3
      })
    })
  });

  return style;
}

// 新增雨水图层初始化
var vectorLayer = new VectorLayer({
  source: new VectorSource(),
  style: function(feature) {
    // 根据参数自定义显示label和图层颜色，使得不同雨量级别的Feature显示不同颜色
    let style = genStyle(feature.get('color'));
    style.getText().setText(feature.get('rainLevel'));
    return style;
  }
});
// 地图底图
var titleLayer = new TileLayer({
  declutter: true,
  source: new XYZ({
    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attributions:
      '© <a href="https://xiaozhuanlan.com/webgis/">Mapbox</a> ' +
      '© <a href="https://xiaozhuanlan.com/webgis">' +
      'WebGIS入门实战</a>'
  })
});
// 创建地图实例
var map = new Map({
  target: document.getElementById('map'),
  layers: [titleLayer, vectorLayer],
  view: new View({
    center: fromLonLat([119.6114, 32.8403]),
    zoom: 4
  })
});


/**
 * 获取雨水数据并渲染
 * @param {*} a
 */
function displayRainPublic(a) {
  try {
    $.ajax({
      type: 'GET',
      url: 'http://typhoon.zjwater.gov.cn/Api/LeastRain/' + a,
      dataType: 'jsonp',
      jsonp: 'callback',
      success: function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        vectorLayer.getSource().clear();
        for (b = JSON.parse(a.contours), c = 0; c < b.length; c++) {
          for (d = [], e = b[c], f = 0; f < e.latAndLong.length; f++) {
            d.push([e.latAndLong[f][1], e.latAndLong[f][0]]);
          }
          g = b[c].color.substring(0, b[c].color.lastIndexOf(','));
          var polygon = new Polygon([d]);
          polygon.applyTransform(getTransform('EPSG:4326', 'EPSG:3857'));
          var feature = new Feature({
            geometry: polygon,
            rainLevel: rainLevel[e.symbol],
            color: g
          });
          vectorLayer.getSource().addFeature(feature);
        }
        toastr.options = {
          closeButton: true,
          progressBar: true,
          showMethod: 'slideDown',
          positionClass: 'toast-top-right',
          timeOut: 4e3
        };
        i = moment(new Date(a.time)).format('M月DD日HH时');
        toastr.info(
          '',
          '&nbsp;&nbsp;数据来源：中央气象台<br/><p/>&nbsp;&nbsp;发布时间：' + i
        );
      }
    });
  } catch (b) {}
}


// 本地会跨域，请部署
$('#export-png').click(function() {
  map.once('rendercomplete', function(event) {
    var canvas = event.context.canvas;
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
    } else {
      try {
        canvas.toBlob(function(blob) {
          saveAs(blob, 'map.png');
        });
      } catch (e) {
        alert(e);
      }
    }
  });
  map.renderSync();
});

displayRainPublic(24);


$('.rain-btn').click(function(e) {
  var target = e.target;
  var hour = $(target).attr('data-hour');
  displayRainPublic(hour);
});
