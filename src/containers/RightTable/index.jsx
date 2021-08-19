import React, { useState } from 'react'
import { connect } from 'dva';
import {message } from 'antd'
import RightTableComponent from '../../components/RightTable'

function RightTableContainer(props){

    const [ isLoading, setisLoading ]=useState(false)
    
    const { dispatch } = props

    function confirm(e) {
      console.log(e);
      message.success('Click on Yes');
    }

    function handleDelete(id) {
        confirm()
        // console.log("我是render.id",id)
        dispatch({
          type: 'GetData/delete',
          payload: id,
        });
    }
    

    return(
      <RightTableComponent {...props} onDelete={handleDelete} />
    )
}

export default connect(GetData => GetData)(RightTableContainer)