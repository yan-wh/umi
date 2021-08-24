// 这是入口界面

import React, { useState } from 'react';
import { Row, Col, Spin, } from 'antd'

import Header from '@/containers/Header'
import SideBar from '@/containers/SideBar' 
import DepRecMedicineContainer from '@/containers/DepRecMedicine'
import AdmitPatientListContainer from '@/containers/PatientList/AdmitPatientList'
import LeavePatientListContainer from '@/containers/PatientList/LeavePatientList'
import { connect } from 'dva';


function Index(props) {

  const [currentClickItemKey,setcurrentClickItemKey] = useState('')
  const [isLoading,setisLoading] = useState(false)

  const {dispatch} = props

  const RightContent = [
    <DepRecMedicineContainer />,
    <AdmitPatientListContainer />,
    <LeavePatientListContainer />
  ]

  const onClickToChangeRightContent=(key)=>{
    setcurrentClickItemKey(key)
    dispatch({
      type: 'GetData/saveRightData',
      payload: []
    })
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

          {RightContent[currentClickItemKey]}
          
      </Row>

    </div>
  )
}

export default connect(({GetData})=>({GetData}))(Index)