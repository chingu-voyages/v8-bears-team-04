import React, { useState } from 'react';

import './forms.scss';

function ModalFormCoordinates({submitData}){

    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setLat("");
        setLng("");
        submitData(lat, lng);
    };

    return (
    <form onSubmit={handleSubmit}>
        <div className="modal-row">
                <input 
                    id="lat" 
                    name="lat" 
                    size="1" 
                    aria-label="latitude"
                    placeholder="latitude"
                    value={lat}
                    onChange={e => setLat(e.target.value)}
                />
                <input 
                    id="lng" 
                    name="lng" 
                    size="1"
                    aria-label="longitude"
                    placeholder="longitude"
                    value={lng}
                    onChange={e => setLng(e.target.value)}
                />
        </div>
        <input 
            type="submit"
            className="info-button row-button" 
            value="submit"
        />
    </form>
    );    
};

export default ModalFormCoordinates;