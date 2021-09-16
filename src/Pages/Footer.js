import React from 'react';
import '../css/Footer.css';
import history from './../history';

const Footer = ({ grandTotal }) => {
    return (
        <div className="footer">
            <p id="total">SubTotal: Rs.{grandTotal}</p>
            <div className="continue">
                <button type="submit" id="cont" onClick={() => history.push('/Checkout')}>Continue</button>
            </div>
        </div>
    );
}

export default Footer;