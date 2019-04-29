import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from '../components/forms/SignupForm';
import Notification from '../components/notification/Notification';

function SignupPage(props) {

    const [registered, setRegistered] = useState(false);    
    const [notification, setNotification] = useState({});

    function submitData({name, email, password}) {
        const fetchOpt = {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify({name, email, password})
        };

        return fetch('/auth/register', fetchOpt)
                .then(response => response.json())
                .then(message =>  {
                    if(message.error || message.message.startsWith("User already")) {
                       return setNotification({data:{type:'error', message:'Registration failed'}});
                    };
                    return setRegistered(true);
                })
                .catch(error => console.error(error));
    }

    return (
        <div>
            <h2 className="title" >REGISTER YOUR ACCOUNT</h2>
            {registered &&  
            <Redirect to={{
                pathname:"/signin", 
                state: {type: 'success', 
                        message: 'You successfully registered your account!'
                        }
            }}/>}
            <Notification {...notification} />
            <SignupForm submitData={submitData} />
        </div>
    );
};

export default SignupPage;