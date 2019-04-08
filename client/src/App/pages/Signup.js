import React from 'react';
import SignupForm from '../components/forms/SignupForm';

function SignupPage(props) {
    return (
        <div>
            <h2 className="title" >REGISTER YOUR ACCOUNT</h2>
            <SignupForm />
        </div>
    );
};

export default SignupPage;