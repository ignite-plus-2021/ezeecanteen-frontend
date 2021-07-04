import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../Pages/Login';
import BrowseFood from '../Pages/BrowseFood';
import SignUp from '../Pages/Signup';
const WebNavigator = (props) => {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/BrowseFood" exact component={BrowseFood} />
                    <Route path="/SignUp" exact component={SignUp} />
                </Switch>
            </Router>
        </div>
    );
};
export default WebNavigator;
