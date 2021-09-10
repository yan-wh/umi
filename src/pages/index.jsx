// 这是入口界面

import React, { useState } from 'react';
import { Row, Col, Spin, } from 'antd'
import {NavLink} from 'umi'
// import { Route, Switch } from 'umi/router';


import Header from '@/containers/Header'
import SideBar from '@/containers/SideBar' 
import DepRecMedicineContainer from '@/containers/DepRecMedicine'
import AdmitPatientListContainer from '@/containers/PatientList/AdmitPatientList'
import LeavePatientListContainer from '@/containers/PatientList/LeavePatientList'


export default function() {
  
  const [loading,setloading] = useState(false)
  // const [isClickDepRecMedicine,setisClickDepRecMedicine] = useState(false)
  // const [isClickAdmitPatientList,setisClickAdmitPatientList] = useState(false)
  // const [isClickLeavePatientList,setisClickLeavePatientList] = useState(false)

  // const onClickDepRec=async()=>{
  //   setloading(true)
  //   await setisClickDepRecMedicine(true)
  //   await setisClickAdmitPatientList(false)
  //   await setisClickLeavePatientList(false)
  //   setloading(false)
  // }

  // const onClickAdmitPatientList=async()=>{
  //   setloading(true)
  //   await setisClickAdmitPatientList(true)
  //   await setisClickLeavePatientList(false)
  //   await setisClickDepRecMedicine(false)
  //   setloading(false)
  // }

  // const onClickLeavePatientList=async()=>{
  //   setloading(true)
  //   await setisClickLeavePatientList(true)
  //   await setisClickDepRecMedicine(false)
  //   await setisClickAdmitPatientList(false)
  //   setloading(false)
  // }

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
                // onClickDepRec={onClickDepRec} 
                // onClickAdmitPatientList={onClickAdmitPatientList}
                // onClickLeavePatientList={onClickLeavePatientList}
              />
          </Col>

          <DepRecMedicineContainer />

          {/* <Spin spinning={loading}>
            {isClickDepRecMedicine? 
              <DepRecMedicineContainer isClickDepRecMedicine={isClickDepRecMedicine}/>
              :
              ''
            }
          </Spin>
          
          <Spin spinning={loading}>
            {isClickAdmitPatientList? 
              <AdmitPatientListContainer isClickAdmitPatientList={isClickAdmitPatientList}/>
              :
              ''
            }
          </Spin>
          
          <Spin spinning={loading}>
            {isClickLeavePatientList? 
              <LeavePatientListContainer isClickLeavePatientList={isClickLeavePatientList}/>
              :
              ''
            }
          </Spin> */}

          
      </Row>

    </div>
  )
}
