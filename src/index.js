import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LocaleProvider locale={zhCN}>
    <AppRouter />
  </LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
