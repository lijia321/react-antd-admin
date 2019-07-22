/**
 * @description
 * @author lijia
 * @date 2019-07-19
 * @returns 
 */
import React from 'react'
import {  Route, Switch } from "react-router-dom";
import HomePage from './Home'
import UserCenter from './User/Center'
import UserSet from './User/Set'
function PageRouter() {
  return (
    <Switch>
        <Route path="/home"  component={HomePage} />
        <Route path="/user/center"  component={UserCenter} exact/>
        <Route path="/user/set"  component={UserSet} exact/>
    </Switch>
  );
}

export default PageRouter;
