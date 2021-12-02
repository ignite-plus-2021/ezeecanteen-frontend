import React, { usestate, useEffect } from "react";
import Header from '../components/Header';
import '../css/completepayment.css';
import { Link } from "react-router-dom";
import Axios from 'axios'

function CompletePayment(props) {
    var data = props.location.state.data;
    const loginEmail = { email: props.location.state.data.email }
    const loginName = { fullname: props.location.state.data.fullName }
    return (
        <div>
            <Header loginDetails={loginName} loginEmail={loginEmail} />
            <div className="completepayment">

                <p className="completed">
                    Payment Completed!
                </p>
                <p className="message">
                    Your Order is on the way
                    <br></br>
                    You will be notified once it is ready
                    <br></br>
                </p>
                <Link to={{
                    pathname: "/BrowseFood",
                    state: {
                        email: props.location.state.data.email,
                        fullName: props.location.state.data.fullName
                    }
                }}>
                    <button className="continuebrowsing">Continue</button>
                </Link>

            </div>
        </div>
    );
}

export default CompletePayment