import React from 'react';
import Header from '../components/VendorHeader';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function FoodPartnerHome() {
    return (

        <div className="bodydash">
            <Header />
            <div className="flexdash1">
                <div className="flex-item"><button className="buttonhome">Update Menu</button></div>
                <Link to='./Dashboard'>


                    <div className="flex-item"><button className="buttonhome" onClick={'./Dashboard'}>Order Dashboard</button></div>

                </Link>
            </div>
        </div>
    )
}

export default FoodPartnerHome;