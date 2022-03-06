import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import { auth,provider } from './firebase';

const Login = () => {
    const signIn=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
           
                <img width="100%"src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png" alt="" srcset="" />

            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
