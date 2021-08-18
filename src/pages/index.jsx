// 这是入口界面


import React from 'react';
import { Row, Col } from 'antd'

import Header from '../containers/Header' 
import LeftTable from '../containers/LeftTable'
import RightTable from '../containers/RightTable'

export default function() {
  
  return(
    <div>
      <Row>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
            <LeftTable />
        </Col>
        <Col span={16}>
            <RightTable />
        </Col>
      </Row>
    </div>
  )
}
