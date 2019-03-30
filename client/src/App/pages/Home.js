import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <h3> Page One. </h3>
            <div>
                <h4>Main route query result:</h4>
                <small>
                    <code>{message.message}</code>
                </small>
            </div>
            <Link to="/list">Check links - page II</Link>
            <Map />
        </div>
    );
};

export default Home;