import React, { useState } from 'react'

import { Menu, Icon, Avatar } from 'antd';

import './index.less'
import sideBarHeader from '../../static/side_bar_header.ico'

const { SubMenu } = Menu;

export default class SideBarComponent extends React.Component{

    constructor(props){
        super(props)
    }

    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
        } else {
        this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
        }
    };


    render() {
        const {onClick} = this.props
        return (
            <div className="side-bar">
                <div className="side-bar-header">
                    <Avatar src={sideBarHeader} style={{width: '40px', height: '40px', marginTop: '5px'}}></Avatar>
                </div>
                <Menu
                    mode="inline"
                    // openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 'auto', backgroundColor: '#2f3640', color: '#dcdde1'}}
                >
                    <Menu.Item key="1">
                        <span>
                            <Icon type="mail" />
                            <span onClick={onClick}>科室领药</span>
                        </span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                            <Icon type="appstore" />
                            <span>患者列表</span>
                            </span>
                        }
                        >
                        <Menu.Item key="2">Option 5</Menu.Item>
                        <Menu.Item key="3">Option 6</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>医嘱管理</span>
                            </span>
                        }
                        >
                        <Menu.Item key="4">Option 9</Menu.Item>
                        <Menu.Item key="5">Option 10</Menu.Item>
                        <Menu.Item key="6">Option 11</Menu.Item>
                        <Menu.Item key="7">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}