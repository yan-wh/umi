// 这是入口界面

import React, { useState } from 'react';
import { Row, Col } from 'antd'

import Header from '@/containers/Header'
import SideBar from '@/containers/SideBar' 
import DepRecMedicine from '@/components/DepRecMedicine'

export default function() {
  
  const [isClickDepRecMedicine,setisClickDepRecMedicine] = useState(false)

  const onClick=()=>{
    setisClickDepRecMedicine(true)
  }

  return(
    <div style={{height:'100vh', overflow: 'hidden'}}>
      {/* header */}
      <Row>
        <Header />
      </Row>
      {/* body */}

      <Row>
          <Col span={3}>
              <SideBar onClick={onClick} />
          </Col>
          <DepRecMedicine isClickDepRecMedicine={isClickDepRecMedicine}/>
      </Row>

    </div>
  )
}
