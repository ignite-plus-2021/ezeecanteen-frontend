import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../css/Header.css';
import logo from '../assets/logos/logo_.jpeg';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../css/userdetails.css';
import userimg from '../assets/Images/userimage.png';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            isLoaded: false,
            logindetails: [3]
        };
    };
    componentDidMount = () => {
    };
    state = {
        badgeContent: 0
    };
    handleInputChange = (event) => {
        this.props.onNumberChange(event.target.value)
    }
    render() {
        var { isLoaded, fullName, email } = this.state;
        const { loginDetails } = this.props;
        const LoginEmail = this.props.loginEmail
        console.log("errgt")
        console.log(loginDetails)
        console.log(LoginEmail)
        var fullname = '';
        if (loginDetails && loginDetails.fullname) {
            if (loginDetails.fullname.length > 6) {
                fullname = loginDetails.fullname.substring(0, 8) + '...';
                email = LoginEmail.email
            }
            else {
                fullname = loginDetails.fullname;
                email = LoginEmail.email
            }
        }
        console.log("Fullname in header")
        console.log(loginDetails)
        console.log(fullname)
        console.log(email)
        return (
            <div>
                <div className="header1">
                    <div className="header__first">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="headericondiv">
                        <div className="header__second" id="result">
                            <button className="headerdrop" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

                                <AccountCircleIcon className="ICONhead" fontSize="large" color="white" /></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">


                                <li><Link to={{
                                    state: { fullName, email }
                                }} onClick={(e) => e.preventDefault()} data-toggle="modal" data-target="#exampleModal">User Details</Link></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </div>
                        <div className="header__second1">
                            {loginDetails && loginDetails.fullname &&
                                <span className="header__secondOne">{fullname}
                                </span>
                            }

                        </div></div>
                    <div className="header__third">
                        <Badge onChange={this.handleInputChange} badgeContent={this.props.number} color="secondary" showZero>

                            <ShoppingCartIcon fontSize="large" htmlColor="white" />
                        </Badge>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">User Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="usercontainer1">
                                    <img src={userimg} classNameName="userimage" alt="user" />
                                    <div className="namediv">{fullname}</div>
                                    <div className="emaildiv">{email}</div></div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header