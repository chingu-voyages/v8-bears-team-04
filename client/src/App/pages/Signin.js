import React from 'react';
import SigninForm from '../components/forms/SigninForm';

function SigninPage(props) {
    return (
        <div>
            <h2 className="title" >LOGIN WITH YOUR CREDENTIALS</h2>
            <SigninForm />
        </div>
    );
};

export default SigninPage;