import React from 'react';

import Notification from '../components/notification/Notification';

function Home (props) {

    const {state = {}} = props.location;
    const {type, message: msg} = state;
        
    return (
        <div className="App">
            <Notification data={{type, message:msg}} />
            <div className="hero">
                <div className="hero-text" >
                    <h1 className="hero-title" >LOCATION FINDER</h1>
                    <h4 className="hero-subtitle">REPLACE WITH AN INSPIRING TEXT THAT DESCRIBE OUR APP</h4>
                </div>
            </div>
        </div>
    );
};

export default Home;