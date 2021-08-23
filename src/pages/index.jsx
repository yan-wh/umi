// 这是入口界面

import React, { useState } from 'react';
import { Row, Col, Spin, } from 'antd'

import Header from '@/containers/Header'
import SideBar from '@/containers/SideBar' 
import DepRecMedicineContainer from '@/containers/DepRecMedicine'
import AdmitPatientListContainer from '@/containers/PatientList/AdmitPatientList'
import LeavePatientListContainer from '@/containers/PatientList/LeavePatientList'


export default function() {
  
  const [loading,setloading] = useState(false)
  const [currentClickItemKey,setcurrentClickItemKey] = useState('')

  const RightContent = [
    <DepRecMedicineContainer />,
    <AdmitPatientListContainer />,
    <LeavePatientListContainer />
  ]

  const onClickToChangeRightContent=(key)=>{
    setloading(true)
    setcurrentClickItemKey(key)
    setloading(false)
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
              <SideBar 
                onClickToChangeRightContent={onClickToChangeRightContent} 
              />
          </Col>

          {RightContent[currentClickItemKey-1]}

          
      </Row>

    </div>
  )
}
