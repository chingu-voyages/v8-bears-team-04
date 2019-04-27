import React, { useState } from 'react';
import {emailValidation, passwordValidation} from './validationRules';

import './forms.scss';

function SigninForm({submitData}) {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);

    function submitForm(e) {
        e.preventDefault();

        submitData({email, password});
        setEmail("");
        setPassword("");
    }

    function validateEmail(email) {
        let validationError = emailValidation(email);
        if(validationError) {
            setEmailError(validationError);
        }
    };

    function validatePassword(password) {
        let validationError = passwordValidation(password);
        if(validationError) {
            setPasswordError(validationError);
        }
    }

    return ( 
        <form className="form-container" onSubmit={submitForm}>
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

export default SigninForm;