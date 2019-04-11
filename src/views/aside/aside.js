import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, } from 'antd';
import "./aside.less"
import AsideRoutes from "../../router/router"

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import Home from "../home/home"
import ModuleFirst from "../module/moduleFirst"
import {Route} from 'react-router-dom';


const menuListArray = [
  {
    name: "首页",
    label: "首页",
    key: "home",
    value: "home",
    linkUrl: "/home",
    children: [],
  },
  {
    name: "模块",
    label: "模块",
    key: "module",
    value: "module",
    linkUrl: "/module",
    children: [
      {
        name: "模块1",
        label: "模块1",
        key: "module1",
        value: "module1",
        linkUrl: "/module1",
        children: [
          {
            name: "首页",
            label: "首页",
            key: "home",
            value: "home",
            linkUrl: "/home",
            children: [],
          },
        ],
      },
      {
        name: "模块3",
        label: "模块3",
        key: "module3",
        value: "module3",
        linkUrl: "/module3",
        children: [],
      },
    ],
  },
]

class LayoutAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  componentDidMount() {
    console.log(this.props)
  }
  onCollapse() {
    this.setState({collapsed: !this.state.collapsed})
  }
  menuChange(key, type) {
    console.log(key, type)
  }
  routerTo(path) {
    console.log(window.historyState)
    console.log(this)
    this.props.history.replace(path)
  }

  render(){
    return(
      <div className="layoutOuterClass">
        <div className="layoutHeaderOuter"></div>
        <div className="layoutContainerOuter">
          <div className="layoutSiderOuter">
            <Sider collapsed={this.state.collapsed} className="asideClass" >
              <div onClick={this.onCollapse.bind(this)} className="asideCollapseButton"></div>
              <Menu
                mode="inline"
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                onOpenChange={this.menuChange.bind(this)}
              >
                {
                  menuListArray.length > 0 && menuListArray.map((item, index) => {
                    if(item.children.length > 0) {
                      return <SubMenu key={item.key} title={<span><Icon type="laptop" />{item.label}</span>}>
                        {
                          item.children.length > 0 && item.children.map((itemChild, index) => {
                            if(itemChild.children.length > 0) {
                              return <SubMenu key={itemChild.key} title={<span><Icon type="laptop" />{itemChild.label}</span>}>
                                {
                                  itemChild.children.map((itemThird, index) => {
                                    return <Menu.Item key={itemThird.key} onClick={this.routerTo.bind(this, itemThird.linkUrl)}>{itemThird.label}</Menu.Item>
                                  })
                                }
                              </SubMenu>
                            } else {
                              return <Menu.Item key={itemChild.key} onClick={this.routerTo.bind(this, itemChild.linkUrl)}>{itemChild.label}</Menu.Item>
                            }
                          })
                        }
                      </SubMenu>
                    } else {
                      return <Menu.Item key={item.key} onClick={this.routerTo.bind(this, item.linkUrl)}>{item.label}</Menu.Item>
                    }
                  })
                }
              </Menu>
            </Sider>
          </div>
          <div className="layoutSiderContainerOuter">
            <div className="layoutSiderContainerHeader">
              <div className="menuList"></div>
              <div className="menuBreadCrumbs"></div>
            </div>
            <div className="layoutSiderContainerCont">
              <AsideRoutes></AsideRoutes>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LayoutAside;
