import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../css/VendorHeader.css';
import logo from '../assets/logos/logo_.jpeg';

class VendorHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="header2">
                    <div className="header2__first">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header2__second">
                        <button className="headerdrop" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

                            <AccountCircleIcon className="ICONhead" fontSize="large" color="white" /></button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="/">Logout</a></li>
                        </ul>


                    </div>
                </div>
            </div>
        );
    }
}
export default VendorHeader