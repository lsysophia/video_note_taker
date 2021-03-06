import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home"
import Search from "../components/Search"

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
        </Switch>
    </Router>
)