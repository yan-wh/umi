import React from 'react'
import { Avatar, Row, Col, Icon } from 'antd'
import './index.less'

import header from '@/static/header_2.ico'

export default function HeaderComponent(props){
    // console.log(props)
    return(
        <Row className="header-container">
            <Col span={3} className="col-avatar">
                <Avatar src={header} style={{height: '60px', width: '60px', margin: '5px auto auto 35px'}}></Avatar>
            </Col>
            <Col span={21} className="col-system-name">
                <div className="left">
                    <Icon type="medicine-box" style={{fontSize: '20px', color: '#57606f', marginRight: '7px'}}/>
                    <span style={{fontSize: '20px', fontWeight: '800'}}>
                        医护管理系统
                    </span>
                </div>
                <div className="right">
                    <div className="right-1"><a><span>官网</span></a></div>
                    <div className="right-2"><a><span>合作</span></a></div>
                    <div className="right-3"><a><span>帮助</span></a></div>
                </div>
            </Col>
        </Row>
    )
}