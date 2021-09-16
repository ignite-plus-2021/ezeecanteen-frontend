import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from './../history';
import '../css/ForgotPassword.css';
import Axios from "axios";
import Logo from "../assets/logos/logo_.jpeg"

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    // state = {
    //     email:'',
    //     password:''
    // }

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    forgotpassword = (props) => {
        //console.log(props);

        this.setState({ email: this.state.email });
        this.setState({ password: this.state.password });
        console.log({ email: this.state.email });
        console.log({ password: this.state.password });

        Axios.post('http://localhost:3001/api/forgot',
            {
                email: this.state.email,
                password: this.state.password
            }).then(response => {
                console.log(response)
                if (response.data.message) {
                    alert(response.data.message);
                }

                // this.setState({ email: this.state.email });
                //this.setState({password: this.state.password});

            }).catch(error => console.log(error));

    }



    render() {
        const { isPasswordShown } = this.state;
        return (
            <div className="ForgotPasswordContainer">
                <div>
                    <img src={Logo} className="Logo" />
                </div>
                <div className="VerticalLine"></div>
                <div className="Container">
                    <form>
                        <h3>Reset Password</h3>

                        <div className="form-group">
                            <label>Enter OTP</label>
                            <input type="email" className="form-control" placeholder="Enter OTP" onInput={(e) => this.setState({ email: e.target.value })} pattern="[a-z@.]{10-100}" required />
                        </div>
                        <br></br>



                        <br></br>
                        <Link to='/' >
                            <button type="submit" className="btn btn-primary btn-block" id="SignUpButton" onClick={this.forgotpassword}>Set Password</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default ForgotPassword;