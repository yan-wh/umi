import React, { useState } from 'react'
import { connect } from 'dva';
import LeftTableComponent from '@/components/DepRecMedicine/LeftTable'

function LeftTableContainer(props){
    
    const { dispatch } = props


    const getRightData = async () => {
      await dispatch({
        type: 'GetData/saveIsLoading',
        payload: true
      })
      await dispatch({
        type: 'GetData/getRightTableData'
      })
      await dispatch({
        type: 'GetData/saveIsLoading',
        payload: false
      })
    }

    return(
      <LeftTableComponent {...props} getRightData={getRightData}/>
    )
}

export default connect(GetData => GetData)(LeftTableContainer)