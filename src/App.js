/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-07-05 09:01:42
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 14:59:26
 */
/**
 * @description
 * @author lijia
 * @date 2019-07-19
 * @returns 
 */
import React, { Component } from 'react'
import { SlotContext, RT } from '../src/utils/context'
export class App extends Component {

  render() {
    return (
      <SlotContext.Provider value={{RT}}>
        <div className="App" >
          {this.props.children}
        </div>
      </SlotContext.Provider>

    )
  }
}

export default App

