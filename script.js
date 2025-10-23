// mapboxgl.accessToken = 'pk.eyJ1IjoiY3dpbG1vdHQiLCJhIjoiY2s2bWRjb2tiMG1xMjNqcDZkbGNjcjVraiJ9.2nNOYL23A1cfZSE4hdC9ew';
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJmYW1vbWluIiwiYSI6ImNscGwwYzZlMDAxaHgyanA1cWUzY2ExN3YifQ.z5jXdp6__K-B2oj1rpNOJw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', 
    center: [-122.26, 37.87], 
    zoom: 12
});

map.on('load', () => {
    fetch('data/183data.geojson')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load data/map.geojson: ${response.statusText}`);
            }
            return response.json();
        })
        .then(geojson => {
            
            map.addSource('my-custom-data', {
                type: 'geojson',
                data: geojson
            });


            map.addLayer({
                id: 'geojson-layer-visualization',
                type: 'circle',
                source: 'my-custom-data',
                paint: {
                    'circle-color': '#5f97a9',
                    'circle-radius': 8,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });
        

        })
});