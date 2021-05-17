import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginPage from "../LoginPage/index";
import ShowDetails from "../ShowDetails/index";
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/showDetails" component={ShowDetails} />
                </Switch>
            </Router>
        )
    }
}