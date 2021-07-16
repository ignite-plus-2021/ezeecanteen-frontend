import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../css/Header.css';
import logo from '../logo.jpeg';
import Badge from '@material-ui/core/Badge';

class Header extends React.Component{
   
    render(){
       
        return(
            <div>
            <div className="header">
                <div className="header__first">
                    <img src={logo} alt="logo" />
                </div>
                <div className="header__second">
                    <AccountCircleIcon fontSize="large"/>
                    <span className="header__secondOne">Hello</span>
                </div>
                <div className="header__third">
                    <Badge badgeContent={0} color="secondary" showZero>
                        <ShoppingCartIcon fontSize="large" htmlColor="white"/>
                    </Badge>
                </div>
    
            </div>
            </div>
        );
    }
}
export default Header