import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from "./components/layout/AsyncComponent";

const Testimonial = asyncComponent(() => import("./components/testimonial/Testimonial"));
const Configurator = asyncComponent(() => import("./components/configurator/Configurator"));
const Base = asyncComponent(() => import("./components/layout/Base"));

const mapStateToProps = (state) => {
    return {
        location: state.router.location
    }
};

const Routes = ({ location, loggedIn, heads }) => {
    return (
        <Base>
            <Switch location={location}>
                <Route path='/page-1' component={Testimonial} />
                <Route path='/page-2' component={Configurator} />
                <Redirect to={"/page-1"} />
            </Switch>
        </Base>
    )

}

export default connect(mapStateToProps)(Routes);
