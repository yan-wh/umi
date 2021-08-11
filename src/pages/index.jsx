import React from 'react';
import { Row, Col } from 'antd'

import Header from '../containers/Header'  //后续可能改为从container中引入,目前暂时从component中引入
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
