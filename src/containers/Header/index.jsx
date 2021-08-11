import React, { useState } from 'react'
// import { connect } from 'dva';
import HeaderComponent from '../../components/Header'

function HeaderContainer(){

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
      <HeaderComponent />
    )
}

export default HeaderContainer