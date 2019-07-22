import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Redirect } from "react-router-dom";

import PageRoute from './route'
import { menus } from '@src/menus'

import './index.less'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
      constructor(props) {
            super(props)

            this.state = {
                  openKeys: [],
                  selectedKeys: [],
                  rootSubmenuKeys: [],
                  loginIn:false
            }
      }

      renderMenus = (menus) => {
            return menus.map((item) => {
                  if (item.children) {
                        return (
                              <SubMenu
                                    key={item.url}
                                    title={<span><span>{item.name}</span></span>}
                              >
                                    {this.renderMenus(item.children)}
                              </SubMenu>
                        )
                  }
                  return (
                        <Menu.Item key={item.url}>
                              <Link to={item.url}>
                                    <span>{item.name}</span>
                              </Link>
                        </Menu.Item>
                  )
            })
      }

      render() {
            // console.log(this.state.openKeys);
           
            return (
                  <div className='app-container'>
                        <Layout>
                              <Sider
                                    style={{
                                          overflow: 'auto',
                                          height: '100vh',
                                          position: 'fixed',
                                          left: 0,
                                    }}
                              >
                                    <div className="logo" />
                                    <Menu
                                          theme="dark"
                                          mode="inline"
                                    >
                                          {this.renderMenus(menus)}

                                    </Menu>
                              </Sider>
                              <Layout style={{ marginLeft: 200 }}>
                                    <Header style={{ background: '#fff', padding: 0 }} />
                                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                                          <div className='main'>
                                                <PageRoute />
                                          </div>
                                    </Content>
                              </Layout>
                        </Layout>
                  </div>
            )
      }
}

export default App
