import React, { useState } from 'react';

import './forms.scss';

function SigninForm({submitData}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(e) {
        e.preventDefault();

        submitData({email, password});
        setEmail("");
        setPassword("");        
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

export default SigninForm;