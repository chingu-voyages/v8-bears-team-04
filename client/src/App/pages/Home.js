import React, { useState, useEffect } from 'react';

import Map from '../components/interactive-map/InteractiveMap';

function Home (props) {
    const [message, setMessage] = useState('No response');
    
    useEffect(() => {
        fetchData()
            .then(backendMessage => 
                setMessage(backendMessage));
    }, []);
    
    function fetchData() {
        return fetch('/test')
                .then(response => response.json())
                .then(message =>  message);
    };
    
    return (
        <div className="App">
            <div className="hero">
                <div className="hero-text" >
                    <h1 className="hero-title" >LOCATION FINDER</h1>
                    <h4 className="hero-subtitle">REPLACE WITH AN INSPIRING TEXT THAT DESCRIBE OUR APP</h4>
                </div>
            </div>
           {/*  <Map /> */}
        </div>
    );
};

export default Home;