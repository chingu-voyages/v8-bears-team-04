import React from 'react';

import Map from '../components/interactive-map/InteractiveMap';
import Notification from '../components/notification/Notification';

function Home (props) {

    const {state = {}} = props.location;
    const {type, message: msg} = state;
        
    return (
        <div className="App">
            {type && <Notification type={type} message={msg} />}
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