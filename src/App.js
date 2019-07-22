/**
 * @description
 * @author lijia
 * @date 2019-07-19
 * @returns 
 */
import React from 'react'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import App from './pages/index'
import Login from './pages/Login'
//单点登录 登录之后不让再一次登录 也不会到登录页面
function AppRouter() {
  const loggedIn = true
  return (
    <Router>
        <Route path="/login" component={Login}/>
        <Route path="/" component={App}/>
        <Route path="/" render={() => (
          loggedIn ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/login"/>
          )
        )} />
    </Router>
  );
}

export default AppRouter;
