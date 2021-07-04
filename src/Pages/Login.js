import React, { useState } from 'react';
import Form from 'react-bootstrap-form';
import EzeeCanteenLogo from '../assets/logos/logo_.png';
import { Link } from 'react-router-dom';
import SignUp from '../Pages/Signup';
import '../css/Login.css';

const Login = () => {
    return (
        <div className="LoginContainer">
            <div>
                <img src={EzeeCanteenLogo} className="Logo" />
            </div>
            <div className="VerticalLine"></div>
            <div className="InputContainer">
                <Form>
                    <div className="LoginInput">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>


                        <input className="LoginInputBox" id="username" type="text" name="username" placeholder="Email" /><br />

                    </div>
                    <div className="LoginInput">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                        </svg>
                        <input className="LoginInputBox" id="password" type="password" name="password" placeholder="Password" /><br />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                        SIGN IN
                    </button>
                    <div className="SignUpTag">Not a member? <Link to='../Pages/Signup' className="LoginLink">Sign up now</Link></div>
                </Form>
            </div>
        </div>
    );
}

export default Login;