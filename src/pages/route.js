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
import CurrentPage from './Conversation/Current'
import Transfer from './Conversation/Transfer' 
function PageRouter() {
  return (
    <Switch>
        <Route path="/main"  component={HomePage} />
        <Route path="/user/center"  component={UserCenter} exact/>
        <Route path="/user/set"  component={UserSet} exact/>
        <Route path="/user/set"  component={UserSet} exact/>
        <Route path="/online/current"  component={CurrentPage} exact/>
        <Route path="/online/transfer"  component={Transfer} exact/>
    </Switch>
  );
}

export default PageRouter;
