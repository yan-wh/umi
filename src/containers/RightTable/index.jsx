import React, { useState } from 'react'
import { connect } from 'dva';
import RightTableComponent from '../../components/RightTable'

function RightTableContainer(props){

    const [ isLoading, setisLoading ]=useState(false)
    
    const { dispatch } = props

    function handleDelete(id) {
        // console.log("我是render.id",id)
        dispatch({
          type: 'GetData/delete',
          payload: id,
        });
    }
    
    const getSomeData = async () => {
      setisLoading(true)
      await dispatch({
        type: 'GetData/getRightTableData'
      })
      setisLoading(false)
    }

    return(
      <RightTableComponent {...props} onDelete={handleDelete} handleSearch={getSomeData} isLoading={isLoading}/>
    )
}

export default connect(GetData => GetData)(RightTableContainer)