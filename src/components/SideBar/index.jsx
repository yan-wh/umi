import React, { useState } from 'react'
import { Menu, Icon, Avatar } from 'antd';


import './index.less'

const { SubMenu } = Menu;


export default class SideBarComponent extends React.Component{

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
        const {onClickToChangeRightContent} = this.props
        return (
            <div className="side-bar">
                <Menu
                    mode="inline"
                    // openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 'auto', backgroundColor: '#2f3640', color: '#dcdde1'}}
                    onClick={(item,key)=>{
                        // console.log("我是你此时鼠标点击的item的key值",item.key)
                        onClickToChangeRightContent(item.key)
                    }}
                >
                    <Menu.Item key="0">
                        <span>
                            <Icon type="mail" />
                            <span>科室领药</span>
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
                        <Menu.Item key="1"><span>入院患者</span></Menu.Item>
                        <Menu.Item key="2"><span>出院患者</span></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                            <Icon type="setting" />
                            <span>医嘱</span>
                            </span>
                        }
                        >
                        <Menu.Item key="3">医嘱查询</Menu.Item>
                        <Menu.Item key="4">医嘱审核</Menu.Item>
                        <Menu.Item key="5">医嘱管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}


// export default function SideBarComponent(props){

//     // submenu keys of first level
//     const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
//     const [keys,setKeys] = useState(['sub1'])
//     const {onClickDepRec,onClickAdmitPatientList,onClickLeavePatientList} = props

//     const onOpenChange = openKeys => {
//         const latestOpenKey = openKeys.find(key => keys.indexOf(key) === -1);
//         if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//             setKeys({
//                 keys: openKeys
//             });
//         } else {
//             setKeys({
//                 keys: latestOpenKey ? [latestOpenKey] : [],
//         });
//         }
//     };

//     return (
//         <div className="side-bar">
//             <Menu
//                 mode="inline"
//                 onOpenChange={onOpenChange}
//                 style={{ width: 'auto', backgroundColor: '#2f3640', color: '#dcdde1'}}
//             >
//                 <Menu.Item key="1">
//                     <span>
//                         <Icon type="mail" />
//                         <span onClick={onClickDepRec}>科室领药</span>
//                     </span>
//                 </Menu.Item>
//                 <SubMenu
//                     key="sub1"
//                     title={
//                         <span>
//                         <Icon type="appstore" />
//                         <span>患者列表</span>
//                         </span>
//                     }
//                     >
//                     <Menu.Item key="2"><span onClick={onClickAdmitPatientList}>入院患者</span></Menu.Item>
//                     <Menu.Item key="3"><span onClick={onClickLeavePatientList}>出院患者</span></Menu.Item>
//                 </SubMenu>
//                 <SubMenu
//                     key="sub2"
//                     title={
//                         <span>
//                         <Icon type="setting" />
//                         <span>医嘱</span>
//                         </span>
//                     }
//                     >
//                     <Menu.Item key="4">医嘱查询</Menu.Item>
//                     <Menu.Item key="5">医嘱审核</Menu.Item>
//                     <Menu.Item key="6">医嘱管理</Menu.Item>
//                 </SubMenu>
//             </Menu>
//         </div>
//     );
    
// }






