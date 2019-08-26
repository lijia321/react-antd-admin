/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-08-08 14:15:01
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 10:43:03
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'

class AuthRouter extends Component {
    render() {  
        const { component: Component, ...rest } = this.props
        const isLogged = localStorage.getItem("isLogin") === "1" ? true : false;
        return (
            <Route {...rest} render={props => {
              return isLogged
                  ? <Component {...props} />
                  : <Redirect to="/login" />
            }} />
        )
      }
}

export default withRouter(AuthRouter);