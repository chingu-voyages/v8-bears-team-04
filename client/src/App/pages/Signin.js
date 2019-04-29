import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import SigninForm from '../components/forms/SigninForm';
import Notification from '../components/notification/Notification';

function SigninPage(props) {

    const [notification, setNotification] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    
    useEffect(() => {
        // extract state passed from other components, if any
        const {state = {}} = props.history.location;
        const {type, message} = state;
        if(type){
            setNotification({data:{type, message}});
        };

        // Remove state passed from other components to avoid
        // re-pop of notification on refresh
        props.history.replace({
            pathname: props.history.location.pathname,
            state: {}
        });
    }, []);

    function submitData({email, password}) {
        const fetchOpt = {
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify({email, password})
        };

        return fetch('/auth/login', fetchOpt)
                .then(response => response.json())
                .then(message =>  {
                    if(message.error || message.message.startsWith("Invalid")) {
                       return setNotification({data:{type:'error', message:'Authentication failed'}});
                    };
                    
                    return setLoggedIn(true);
                })
                .catch(error => console.error(error));
    }

    return (
        <div>
            <h2 className="title" >LOGIN WITH YOUR CREDENTIALS</h2>
            {loggedIn && 
            <Redirect to={{
                pathname:"/", 
                state: {
                    type: 'success', 
                    message: 'You successfully logged in!'
                    }
            }}/>}
            <Notification {...notification} />
            <SigninForm submitData={submitData}/>
        </div>
    );
};

export default SigninPage;