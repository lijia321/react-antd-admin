/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-08-26 14:33:46
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 14:56:11
 */

import React, { Component } from 'react'
import { Realtime } from 'leancloud-realtime';
import { TypedMessagesPlugin } from 'leancloud-realtime-plugin-typed-messages';
export const RT = new Realtime({
  appId: 'y7xBReL195sPfWIH6kiEnBsz-gzGzoHsz',
  appKey: '05U0OHEbc8CMe2hBt1MgWCEs',
  // server: 'rtm51',
  plugins: [TypedMessagesPlugin],
  region: 'cn' // 美国节点为 "us"
});

export const SlotContext = React.createContext({})