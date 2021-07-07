import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from './../history';
import Logo from '../assets/logos/logo_.jpeg';
import '../css/Signup.css';



export default class SignUp extends Component {


    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    render() {
        const { isPasswordShown } = this.state;
        return (
            <div className="SignUpContainer">
                <div>
                    <img src={Logo} className="Logo" />
                </div>
                <div className="VerticalLine"></div>
                <div className="Container">
                    <form>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Full name</label>
                            <input type="text" className="form-control" placeholder="Full name" required />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" pattern="[a-z@.]{10-100}" required />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Set Password</label>
                            <input type={isPasswordShown ? "text" : "password"} className="form-control" placeholder="Enter password" required />
                            <input type="checkbox" onClick={this.togglePasswordVisiblity} /> Show Password
                        </div>
                        <br></br>

                        <button type="submit" className="btn btn-primary btn-block" id="SignUpButton" onClick={() => history.push('/BrowseFood')}>Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered
                            <Link to='./Login' className="forgot-password text-right"> sign in?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}