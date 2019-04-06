import React, { useState } from 'react';

import LeafletMap from './LeafletMap';
import MapControls from './MapControls';

import './interactive-map.scss';

function InteractiveMap(props) {
    
    const littleton = {latlng: [39.61, -105.02], title: 'Littleton'}
    const denver = {latlng:[39.74, -104.99], title: 'Denver'}
    const aurora = {latlng: [39.73, -104.8], title: 'Aurora'}
    const golden = {latlng: [39.77, -105.23], title: 'Golden'}
    const defaultMarkers = [littleton, denver, aurora, golden];

    let [markers, setMarker] = useState(defaultMarkers);
    let [locationToFind, setLocationToFind] = useState([39.75, -105]);
    
    function addLocation(marker) {
        markers = [...markers, marker];
        setMarker(markers);
    };

    function findLocation(coords) {
        setLocationToFind(coords);
    };

    return (
    <section className="map-container" >
        <h4>Interactive Map</h4>
        <LeafletMap 
            markersData={markers}
            locationToFind={locationToFind}
        />
        <footer>
            <MapControls 
                addLocation={addLocation} 
                findLocation={findLocation}
            />
        </footer>
    </section>
    );
};

export default InteractiveMap;