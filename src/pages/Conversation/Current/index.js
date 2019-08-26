/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-08-08 10:24:56
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 15:10:54
 */
import React, { Component } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { SlotContext } from '../../../utils/context'
import './index.less'

export class MainPage extends Component {
    static contextType = SlotContext;
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
       
        this.connectServer();
    }
    // connectServer(){
    //     const { RT } = this.context
    //     console.log(RT)
    // }
    async connectServer() {
        try {
        //   const username = this.props.user.username
        //   if(!global.client) {
        //     global.client = await createClient(username)
        //   }
        //   this.fetchAll()
        //   this.setClientEventListeners()
        }catch(error) {
        //   notifyUtil.toast(error.toString(), 'long')
        }
      }
    render() {
        return (
            <div></div>


        )
    }
}

export default MainPage
