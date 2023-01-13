var sample_json = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.778320312499999,
                    7.557417356841308
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    9.943115234375001,
                    7.801090616449597
                ]
            }
        }
    ]
}
L.geoJSON(sample_json).addTo(map);