// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import Logo from '../assets/logos/logo_.jpeg';
// import '../css/Signup.css';
// import Axios from "axios";
// import '../css/Login.css';

// class Signup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fullname: '',
//             email: '',
//             password: '',
//             usertype: ''
//         };
//     }
//     state = {
//         isPasswordShown: false
//     };
//     togglePasswordVisiblity = () => {
//         const { isPasswordShown } = this.state;
//         this.setState({ isPasswordShown: !isPasswordShown });
//     };
//     signup = (props) => {
//         Axios.post('http://localhost:3001/api/insert',

//             {
//                 fullname: this.state.fullname,
//                 email: this.state.email,
//                 password: this.state.password,
//                 usertype: this.state.usertype
//             }).then((response) => {
//                 console.log(response)
//                 if (response.data.message) {
//                     console.log(this.state.visibleval);
//                     alert(response.data.message);
//                 }
//                 else {
//                     if (this.state.usertype === 'Personal') {
//                         this.props.history.push({
//                             pathname: '/BrowseFood',
//                             state: {
//                                 email: this.state.email,
//                                 fullName: this.state.fullname
//                             }
//                         });
//                         console.log(this.state.visibleval);
//                     }
//                     else if (this.state.usertype === 'Business') {
//                         this.props.history.push('/FoodPartnerHome')
//                         console.log(this.state.visibleval);
//                     }
//                 }
//             }).catch((err) => {
//                 console.log('Sign up error -' + err)
//             });
//     }
//     render = () => {
//         const { isPasswordShown } = this.state;

//         return (
//             <div className="SignUpContainer" >
//                 <div>
//                     <img src={Logo} className="Logo" alt="logo" />
//                 </div>
//                 <div className="VerticalLine"></div>
//                 <div className="Container">
//                     <form>
//                         <h3>Sign Up</h3>
//                         <div className="radioBox">
//                             <label >
//                                 <input type="radio" id="Personal" name="usertype" value="Personal" className="radioselect" onChange={(e) => this.setState({ usertype: e.target.value })} /> Personal
//                             </label>
//                             <label >
//                                 <input type="radio" id="Business" name="usertype" value="Business" className="radioselect" onChange={(e) => this.setState({ usertype: e.target.value })} /> Business (Food partner)
//                             </label>
//                         </div>
//                         <div className="form-group">
//                             <label>Full name</label>
//                             <input type="text" className="form-control" placeholder="Full name" required id='fullname'
//                                 onInput={(e) => this.setState({ fullname: e.target.value })}
//                             />
//                         </div>
//                         <br></br>
//                         <div className="form-group">
//                             <label>Email address</label>
//                             <input type="email" className="form-control" placeholder="Enter email" pattern="[a-z@.]{10-100}" required
//                                 onInput={(e) => this.setState({ email: e.target.value })} />
//                         </div>
//                         <br></br>
//                         <div className="form-group">
//                             <label>Set Password</label>
//                             <input type={isPasswordShown ? "text" : "password"} className="form-control" placeholder="Enter password" required
//                                 onInput={(e) => this.setState({ password: e.target.value })} />
//                             <input type="checkbox" onClick={this.togglePasswordVisiblity} /> Show Password
//                         </div>
//                         <br></br>
//                         <Link to={{

//                             state: this.state
//                         }} className="LoginLink" onClick={this.signup} >
//                             <button type="submit" className="btn btn-primary btn-block" id="SignUpButton" >
//                                 SIGN UP
//                             </button>
//                         </Link>
//                         <p className="forgot-password text-right">
//                             Already registered
//                             <Link to='./' className="forgot-password text-right"> sign in?</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Signup;
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import history from './../history';
import '../css/Signup.css';
import Axios from "axios";
// import { Link } from 'react-router-dom';
import Logo from '../assets/logos/logo_.jpeg';
// import Logo from "../EzeeCanteenLogo.jpeg";
import validator from 'validator'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            usertype: ''
        };
    }

    state = {
        isPasswordShown: false
    };
    state = {
        emailError: '',
        email1: ''
    };

    validateEmail = (e) => {
        this.state.email1 = e.target.value
        // this.setState({ email: this.state.email1 })
        console.log(this.state.email1)
        if (validator.isEmail(this.state.email1)) {
            this.setState({ emailError: 'Valid Email :)' })
            this.setState({ email: this.state.email })
        } else {
            this.setState({ emailError: 'Enter valid Email!' })
        }
        if (this.state.emailError === 'Valid Email :)') {
            this.setState({ email: '' })
        }
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    signup = (props) => {



        Axios.post('http://localhost:3001/api/insert',

            {
                fullname: this.state.fullname,
                email: this.state.email,
                password: this.state.password,
                usertype: this.state.usertype
            }).then((response) => {
                console.log(response)
                if (response.data.message) {
                    alert(response.data.message);
                }
                else {

                    if (this.state.usertype === 'Personal') {
                        this.props.history.push({
                            pathname: '/BrowseFood',
                            state: {
                                email: this.state.email,
                                fullName: this.state.fullname
                            }
                        });
                    }
                    else if (this.state.usertype === 'Business') {
                        this.props.history.push('/VendorHomePage')
                    }
                }

            }).catch((err) => {
                console.log('Sign up error -' + err)
            });
    }

    render = () => {
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
                        <div className="radioBox">
                            <div>
                                <input type="radio" id="Personal" name="usertype" value="Personal" className="radioselect" onChange={(e) => this.setState({ usertype: e.target.value })} />
                                <label htmlFor="Personal">Personal</label></div>
                            <div>
                                <input type="radio" id="Business" name="usertype" value="Business" className="radioselect" onKeyPress={(e) => this.setState({ usertype: e.target.value })} />
                                <label htmlFor="Business">Business(Food Partner)</label></div>
                        </div>
                        <div className="form-group">
                            <label>Full name</label>
                            <input type="text" className="form-control" placeholder="Full name" onInput={(e) => this.setState({ fullname: e.target.value })} id='fullname' required />
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onInput={(e) => { this.validateEmail(e) }} required />
                            <span className="text-danger">{this.state.emailError}</span>
                        </div>
                        <br></br>

                        <div className="form-group">
                            <label>Set Password</label>
                            <input type={isPasswordShown ? "text" : "password"} className="form-control" placeholder="Enter password" required onChange={(e) => this.setState({ password: e.target.value })} />
                            <input type="checkbox" onClick={this.togglePasswordVisiblity} /> Show Password
                        </div>
                        <br></br>
                        <Link to={this.state.visibleval ? '/BrowseFood' : '/Signup'} className="LoginLink" onClick={this.signup} >

                            <button type="submit" className="btn btn-primary btn-block" id="SignUpButton" onClick={() => history.push('/BrowseFood')}>Sign Up</button>
                        </Link>
                        <p className="forgot-password text-right">
                            Already registered
                            <Link to='./' className="forgot-password text-right"> sign in?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
export default Signup;