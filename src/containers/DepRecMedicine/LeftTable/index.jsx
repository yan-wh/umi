import React, { useState } from 'react'
import { connect } from 'dva';
import LeftTableComponent from '@/components/DepRecMedicine/LeftTable'

function LeftTableContainer(props){

    const [ isLoading, setisLoading ]=useState(false)
    
    const { dispatch } = props
    const mockdata = []
    const data = [{drname: '', drtype_nm: ''}]


    const getRightData = async () => {
      setisLoading(true)
      await dispatch({
        type: 'GetData/getRightTableData'
      })
      setisLoading(false)
    }

    return(
      <LeftTableComponent {...props} isLoading={isLoading} getRightData={getRightData}/>
    )
}

export default connect(GetData => GetData)(LeftTableContainer)