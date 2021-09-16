import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../Pages/Login';
import BrowseFood from '../Pages/BrowseFood';
import SignUp from '../Pages/Signup';
import FoodPartnerHome from '../Pages/FoodPartnerHome';
import Dashboard from '../Pages/Dashboard';
import Checkout from '../Pages/Checkout';
import Payment from '../Pages/Payment';
import ForgotPassword from '../Pages/ForgotPassword';
// import Otp from '../Pages/OTP';
const WebNavigator = (props) => {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/BrowseFood" exact component={BrowseFood} />
                    <Route path="/SignUp" exact component={SignUp} />
                    <Route path="/FoodPartnerHome" exact component={FoodPartnerHome} />
                    <Route path="/Dashboard" exact component={Dashboard} />
                    <Route path="/Checkout" exact component={Checkout} />
                    <Route path="/Payment" exact component={Payment} />
                    {/* <Route path="/Otp" exact component={Otp} /> */}
                    <Route path="/ForgotPassword" exact component={ForgotPassword} />
                </Switch>
            </Router>
        </div>
    );
};
export default WebNavigator;
