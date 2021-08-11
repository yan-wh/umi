import React, { useState } from 'react'
import { connect } from 'dva';
import LeftTableComponent from '../../components/LeftTable'

function LeftTableContainer(props){

    const [ isLoading, setisLoading ]=useState(false)
    
    const { dispatch } = props
    
    const getSomeData = async () => {
      setisLoading(true)
      await dispatch({
        type: 'GetData/getLeftTableData'
      })
      setisLoading(false)
    }

    return(
      <LeftTableComponent {...props} handleSearch={getSomeData} isLoading={isLoading}/>
    )
}

export default connect(GetData => GetData)(LeftTableContainer)