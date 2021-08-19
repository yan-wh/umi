import React, { useState } from 'react'
// import { connect } from 'dva';
import SideBarComponent from '../../components/SideBar'

function SideBarContainer(){

    const [ isLoading, setisLoading ]=useState(false)
    
    // const { dispatch } = props
    
    // const getSomeData = async () => {
    //   setisLoading(true)
    //   await dispatch({
    //     type: 'GetData/getLeftTableData'
    //   })
    //   setisLoading(false)
    // }

    return(
      <SideBarComponent />
    )
}

export default SideBarContainer