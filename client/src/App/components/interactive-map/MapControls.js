import React, { useState } from 'react';

function MapControls(props) {

    const [addLat, setAddLat] = useState('');
    const [addLng, setAddLng] = useState('');
    const [goLat, setGoLat] = useState('');
    const [goLng, setGoLng] = useState('');

    function markOwnLocation(){
        if(!navigator.geolocation) {
            console.log("No geolocation available");
            // fake return aimed to debug
            return props.addLocation({latlng:[40, -100], title: 'Me'});
            //return "No geolocation available";
        };
        
        navigator.geolocation.getCurrentPosition(
            pos => props.addLocation({
                latlng:[pos.coords.latitude, pos.coords.longitude],
                title: 'Me'
            }),
            err => "Not found"
        );
    };

    function markLocation() {
        props.addLocation({
            latlng: [addLat, addLng],
            title: 'Custom Marker'
        });
        setAddLat("");
        setAddLng("");
    };

    function searchLocation() {
        props.findLocation([goLat, goLng]);
        setGoLat("");
        setGoLng("");
    };

    return (
        <div className="controls">
            <div className="row">
                <button onClick={markOwnLocation}>Mark your location!</button>
            </div>
            <div className="row">
                <button onClick={markLocation}>Add:</button>
                <input 
                    type="text" 
                    size="1" 
                    name="addLat" 
                    placeholder="Lat"
                    value={addLat}
                    onChange={e => setAddLat(e.target.value)}
                />
                <input 
                    type="text" 
                    size="1" 
                    name="addLng" 
                    placeholder="Lng"
                    value={addLng}
                    onChange={e => setAddLng(e.target.value)}
                />
            </div>
            <div className="row">
                <button onClick={searchLocation}>Go:</button>
                <input 
                    type="text" 
                    size="1" 
                    name="goLat"
                    placeholder="Lat"
                    value={goLat}
                    onChange={e => setGoLat(e.target.value)}
                />
                <input 
                    type="text"
                    size="1"
                    name="goLng"
                    placeholder="Lng"
                    value={goLng}
                    onChange={e => setGoLng(e.target.value)}
                />
            </div>
        </div>
    )
};

export default MapControls;