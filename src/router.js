/**
 * @description
 * @author lijia
 * @date 2019-07-19
 * @returns 
 */
import React from 'react'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import App from './App';
import Home from './pages/index'
import Login from './pages/Login'
import AuthRouter from './AuthRouter'
function AppRouter() {
    const isLogged = localStorage.getItem("isLogin") === "1" ? true : false;
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/login" render={() => (
                        isLogged ? (
                            <Redirect to="/main" />
                        ) : (
                                <Login />
                            )
                    )} exact />
                    <AuthRouter path='/' component={Home} />
                </Switch>
            </App>
        </Router>
    );
}

export default AppRouter
