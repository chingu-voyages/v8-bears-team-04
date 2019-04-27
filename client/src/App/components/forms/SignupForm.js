import React, { useState } from 'react';

import {nameValidation, emailValidation, 
        passwordValidation, passwordBisValidation} from './validationRules';

import './forms.scss';

function SignupForm({submitData}) {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);
    const [passwordBis, setPasswordBis] = useState("");
    const [passwordBisError, setPasswordBisError] = useState(null);

    function submitForm(e) {
        e.preventDefault();

        submitData({name, email, password, passwordBis});

        setName("");
        setEmail("");
        setPassword("");
        setPasswordBis("");
    };

    function validateName(name) {
        let validationError = nameValidation(name);
        if(validationError) {
            setNameError(validationError);
        };
    };

    function validateEmail(email) {
        let validationError = emailValidation(email);
        if(validationError) {
            setEmailError(validationError);
        };
    };

    function validatePassword(password) {
        let validationError = passwordValidation(password);
        if(validationError) {
            setPasswordError(validationError);
        };
    };

    function validatePasswordBis(passwordBis) {
        let validationError = passwordBisValidation(password);
        if(validationError) {
            setPasswordBisError(validationError);
        };
    };

    return ( 
        <form className="form-container" onSubmit={submitForm}>
            <div className="form-field" >
                <label htmlFor="name">Name:</label>
                <input
                    type="text" 
                    id="name"
                    size="1"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={e => validateName(e.target.value)}
                    onFocus={() => setNameError(null)}
                />
                <small>{nameError}</small>
            </div>
            <div className="form-field" >
                <label htmlFor="email">Email: </label>
                <input 
                    type="text" 
                    id="email" 
                    size="1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={e => validateEmail(e.target.value)}
                    onFocus={() => setEmailError(null)}                    
                />
                <small>{emailError}</small>
            </div>
            <div className="form-field" >
                <label htmlFor="password"> Password: </label>
                <input 
                    type="password" 
                    id="password" 
                    size="1"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={e => validatePassword(e.target.value)}
                    onFocus={() => setPasswordError(null)}
                />
                <small>{passwordError}</small>
            </div>
            <div className="form-field" >
                <label htmlFor="password-bis"> Confirm Password: </label>
                <input 
                    type="password" 
                    id="password-bis"
                    size="1"
                    value={passwordBis}
                    onChange={e => setPasswordBis(e.target.value)}
                    onBlur={e => validatePasswordBis(e.target.value)}
                    onFocus={() => setPasswordBisError(null)}
                />
                <small>{passwordBisError}</small>
            </div>
            <div className="form-field" >
                <input 
                    type="submit"
                    id="submit-btn" 
                    value="REGISTER" 
                    className="info-button"
                />
            </div>
        </form>
    );
};

export default SignupForm;