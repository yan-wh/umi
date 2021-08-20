import React, { useState } from 'react'
// import { connect } from 'dva';
import SideBarComponent from '../../components/SideBar'

function SideBarContainer(props){

    const [ isLoading, setisLoading ]=useState(false)
    const {onClickDepRec,onClickAdmitPatientList,onClickLeavePatientList} = props
    
    // const { dispatch } = props
    
    // const getSomeData = async () => {
    //   setisLoading(true)
    //   await dispatch({
    //     type: 'GetData/getLeftTableData'
    //   })
    //   setisLoading(false)
    // }

    return(
      <SideBarComponent 
        onClickDepRec={onClickDepRec}
        onClickAdmitPatientList={onClickAdmitPatientList}
        onClickLeavePatientList={onClickLeavePatientList}
      />
    )
}

export default SideBarContainer