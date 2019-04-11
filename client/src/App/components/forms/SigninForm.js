import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import Notification from '../notification/Notification';

import './forms.scss';

function SigninForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    
    const {state = {}} = props.location;
    const {type, message} = state;

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
                       return console.log('Something failed:\n', message);
                    };
                    return setLoggedIn(true);
                })
                .catch(error => console.error(error));
    }

    return ( 
        <form className="form-container" onSubmit={submitForm}>
            {/* redirect to home until login page is set in*/}
            {loggedIn && <Redirect to={{pathname:"/", state: {type: 'success', message: 'You successfully logged in!'}}}/>}
            {type && <Notification type={type} message={message} />}
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