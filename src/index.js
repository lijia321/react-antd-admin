/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-07-05 09:01:42
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 14:41:41
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import AppRouter from './App';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';
import Routers from './router';
import AV from 'leancloud-storage';
AV.init({ appId: 'y7xBReL195sPfWIH6kiEnBsz-gzGzoHsz', appKey: '05U0OHEbc8CMe2hBt1MgWCEs' });
ReactDOM.render(<LocaleProvider locale={zhCN}>
    <Routers />
</LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
