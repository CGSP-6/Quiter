/**
 * 获取云图数据并渲染
 * @param {*} a
 */
function displayCloud(a) {
    $.ajax({
        type: 'GET',
        url: 'http://typhoon.zjwater.gov.cn/Api/LeastCloud',
        dataType: 'jsonp',
        jsonp: 'callback',
        success: function (b) {
            var c, d, f, g, h, i, j;
            if (b.length === 0) {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass: 'toast-bottom-right',
                    timeOut: 4e3
                };
                toastr.error('', '获取云图失败！');
                return;
            }
            c = b[0].cloudFullPath;
            d = '';
            if ('1' == a) d = b[0].cloud1h;
            if ('3' == a) d = b[0].cloud3h;
            if ('6' == a) d = b[0].cloud6h;
            if ('30' == a) d = b[0].cloudname;
            b[0].cloudtime;
            f = b[0].diffTime;
            g = b[0].minLng;
            h = b[0].maxLng;
            i = b[0].minLat;
            j = b[0].maxLat;
            if (parseFloat(f) < 3) {
                map.removeLayer(CloudLayer);
                imageBounds = [0, 0, 1024, 968];
                // imageBounds = [i - 0, g - 0, j - 0, h - 0];
                var url = c + '/' + d;
                /*  CloudLayer = L.imageOverlay(c + '/' + d, imageBounds, {
                  maxZoom: 11
                }); */
                var projection = new Projection({
                    code: 'xkcd-image',
                    units: 'degrees',
                    extent: imageBounds
                });
                CloudLayer = new ImageLayer({
                    source: new Static({
                        url: url,
                        projection: projection,
                        imageExtent: imageBounds
                    })
                });
                console.log(imageBounds);
                console.log(CloudLayer);
                map.addLayer(CloudLayer);
                // map._panes.overlayPane.children[0].style.zIndex = '2';
                // map._panes.overlayPane.children[1].style.zIndex = '-1';
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass: 'toast-bottom-right',
                    timeOut: 4e3
                };
                var d2 = `${d.substring(0, 4)}/${d.substring(4, 6)}/${d.substring(
                    6,
                    8
                )} ${d.substring(8, 10)}:${d.substring(10, 12)}`;
                var timeStr = moment(new Date(d2)).format('M月DD日HH时');
                toastr.info('', '数据发布时间：' + timeStr);
            } else {
                toastr.options = {
                    closeButton: true,
                    progressBar: true,
                    showMethod: 'slideDown',
                    positionClass: 'toast-bottom-right',
                    timeOut: 4e3
                };
                toastr.warning('', '无最新云图！');
            }
        }
    });
}