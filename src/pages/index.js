/*
 * @Descripttion: Do not edit
 * @Author: 李佳
 * @Date: 2019-07-22 14:44:11
 * @LastEditors: 李佳
 * @LastEditTime: 2019-08-26 11:22:06
 */
import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import { Link, Redirect } from "react-router-dom";

import PageRoute from './route'
import { menus } from '@src/menus'
import { getFlatMap,familyTree } from '@utils'
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
                  oldOpenKeys: [],
                  loginIn: false
            }
      }
      componentDidMount() {
            // console.log(this.props)
            const selectUrl = this.props.location.pathname;
            const id = getFlatMap(menus).filter((it) => it.key === selectUrl)[0].id;
            this.setState({selectedKeys: [selectUrl], openKeys: familyTree(menus, id)})
      }

      getSelectedMenuKeys = pathname => {
            // const { flatMenuKeys } = this.props;
            // return urlToList(pathname).map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop());
      };
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
      handleSelect = (e) => {
            const { openKeys } = this.state
            // console.log(e)
            this.setState({ selectedKeys: e.selectedKeys, oldOpenKeys: openKeys })
      }
      isMainMenu = key => {
            return menus.some(item => {
                  if (key) {
                        return item.key === key || item.path === key;
                  }
                  return false;
            });
      };
      handleOpenChange = openKeys => {

            const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
            this.setState({
                  openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
            });
      };
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
                                          selectedKeys={this.state.selectedKeys}
                                          onSelect={this.handleSelect}
                                          openKeys={this.state.openKeys}
                                          onOpenChange={this.handleOpenChange}
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
