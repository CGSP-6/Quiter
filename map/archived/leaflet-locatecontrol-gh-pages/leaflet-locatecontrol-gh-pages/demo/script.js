const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const osmAttrib = 'Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
let osm = new L.TileLayer(osmUrl, {
  attribution: osmAttrib,
  detectRetina: true
});

let map = new L.Map("map", {
  layers: [osm],
  center: [51.505, -0.09],
  zoom: 10,
  zoomControl: true
});

// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control
  .locate({
    strings: {
      title: "Show me where I am, yo!"
    }
  })
  .addTo(map);
