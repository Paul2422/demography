
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Brgy_Boundary_Poly_1": {
            "type": "geojson",
            "data": json_Brgy_Boundary_Poly_1
        }
                    ,
        "Brgy_Hall_2": {
            "type": "geojson",
            "data": json_Brgy_Hall_2
        }
                    ,
        "BarangayBoundary_Lines_3": {
            "type": "geojson",
            "data": json_BarangayBoundary_Lines_3
        }
                    ,
        "Bayawan_Boundary_4": {
            "type": "geojson",
            "data": json_Bayawan_Boundary_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_Brgy_Boundary_Poly_1_0",
            "type": "fill",
            "source": "Brgy_Boundary_Poly_1",
            "layout": {},
            "paint": {'fill-opacity': 0.601, 'fill-color': '#7cc2f8'}
        }
,
        {
            "id": "lyr_Brgy_Hall_2_0",
            "type": "symbol",
            "source": "Brgy_Hall_2",
            "layout": {},
            "paint": {'icon-image': 'tourism=museum', 'icon-rotate': 0.0}
        }
,
        {
            "id": "lyr_BarangayBoundary_Lines_3_0",
            "type": "line",
            "source": "BarangayBoundary_Lines_3",
            "layout": {},
            "paint": {'line-width': 1.6428571428571428, 'line-opacity': 1.0, 'line-color': '#fc850a', 'line-dasharray': '5 2'}
        }
,
        {
            "id": "lyr_Bayawan_Boundary_4_0",
            "type": "line",
            "source": "Bayawan_Boundary_4",
            "layout": {},
            "paint": {'line-width': 2.357142857142857, 'line-opacity': 1.0, 'line-color': '#031a1c', 'line-dasharray': '5 2'}
        }
],
}