<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="header">
    <div id="map" class="map"></div>
  </div>
  
</template>

<script>
// 导入ol相应的包
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


export default {
  name: 'app',
  components: {
  },
  mounted(){
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  position:absolute;
  left:0;
  width:300;
}
.map {
    position: absolute;
    /* height: 400px;  */
    left:305px;
    width: 80%;
    height: 100%;
}
</style>
