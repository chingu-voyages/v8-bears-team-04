import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import Notification from '../notification/Notification';

import './forms.scss';

function SigninForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [notification, setNotification] = useState({});

    const DURATION = 5000; // in sync with scss animation TO REFACTOR

    useEffect(() => {
        const {state = {}} = props.history.location;
        const {type, message} = state;
        if(type){
            displayNotification(type, message);
        };
    }, []);

    function displayNotification (type, message) {
        setNotification({type, message, display:true})
        setTimeout(() => setNotification({type:"", message:"", display:false}), DURATION);
    }

    function submitForm(e) {
        e.preventDefault();

        const fetchOpt = {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify({email, password})
        };

        return fetch('/auth/login', fetchOpt)
                .then(response => response.json())
                .then(message =>  {
                    setEmail("");
                    setPassword("");
                    if(message.error || message.message.startsWith("Invalid")) {
                       displayNotification('error','Authentication failed');
                       return;
                    };
                    return setLoggedIn(true);
                })
                .catch(error => console.error(error));
    }

    return ( 
        <form className="form-container" onSubmit={submitForm}>
            {loggedIn && <Redirect to={{pathname:"/", state: {type: 'success', message: 'You successfully logged in!'}}}/>}
            {notification.type && <Notification {...notification} />}
            <div className="form-field" >
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    id="email" 
                    size="1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-field" >
                <label htmlFor="password"> Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    size="1"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-field" >
                <input 
                    type="submit"
                    id="submit-btn" 
                    value="Login" 
                    className="info-button"
                />
            </div>
        </form>
    );
};

export default withRouter(SigninForm);