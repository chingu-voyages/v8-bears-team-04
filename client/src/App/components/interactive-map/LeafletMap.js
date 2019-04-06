import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

function Map({ markersData, locationToFind }) {
    const mapRef = useRef(null);
    useEffect(() => {
        mapRef.current = L.map('map', {
            center: [39.75, -105],
            zoom: 10,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });
        mapRef.current.on('click', onMapClick);
    }, []);
    // TOBEREMOVED: useful method for debugging
    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    // layerGroup ref
    const layerRef = useRef(null);

    // layerGroup istance - is added to map (once)
    useEffect(() => {
        layerRef.current = L.layerGroup().addTo(mapRef.current);
    }, []);

    // layerGroup markers, updates each time the property change
    useEffect(() => {
        layerRef.current.clearLayers();
        markersData.forEach(marker => {
            L.marker(marker.latlng, {
                title: marker.title
            })
            .addTo(layerRef.current);
            });
        }, [markersData]);
    
    useEffect(() => {
        mapRef.current.flyTo(locationToFind);
    }, [locationToFind]);

    return <figure id="map"></figure>
};

export default Map;