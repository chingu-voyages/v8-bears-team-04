import React, { useState } from 'react';

import './forms.scss';

function ModalFormZone({submitData}){

    const [name, setName] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setName("");
        submitData(name);
    };
    return (
    <form onSubmit={handleSubmit}>
        <div className="modal-row">
                <input 
                    id="lat" 
                    name="lat" 
                    size="1" 
                    aria-label="geographic-area"
                    placeholder="area (city, region, ...)"
                    value={name}
                    onChange={e => setName(e.target.value)}
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

export default ModalFormZone;