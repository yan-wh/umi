// 这是入口界面

import React, { useState , useEffect} from 'react';
import { withRouter } from 'umi';
import decode from 'jwt-decode';
import { Row, Col, Spin, } from 'antd'
import {NavLink} from 'umi'
// import { Route, Switch } from 'umi/router';


import Header from '@/containers/Header'
import SideBar from '@/containers/SideBar' 
import DepRecMedicineContainer from '@/containers/DepRecMedicine'
import AdmitPatientListContainer from '@/containers/PatientList/AdmitPatientList'
import LeavePatientListContainer from '@/containers/PatientList/LeavePatientList'
import { connect } from 'dva';

function Index(props) {
  
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

  const verify = async ()=>{
    const { dispatch } = props
    await dispatch({
      type: 'GetData/getToken',
      payload: ''
    })
  }

  useEffect(()=>{
    const { dispatch } = props
    const { tokenUserInfo } = props.GetData
    verify()
    if(tokenUserInfo.status === '1'){
      const token = localStorage.getItem('@#@TOKEN')
      const tk = decode(token)
      if(token){
        try{
          dispatch({
            type: 'GetData/saveData',
            payload: {token: tk}
          })
        }catch{  // 报错
          localStorage.removeItem("@#@TOKEN")
          window.location.href = '/login'
        }
      }
    }
  },[props, verify])

  const {location} = props
  if(location.pathname === '/'){
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
  
  
            
        </Row>
  
      </div>
    )
  }else{
    return(
      <>
        {props.children}
      </>
    )
  }
  
 
}
export default connect(({GetData})=>({GetData}))(withRouter(Index))
