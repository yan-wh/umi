import React from 'react'
import { connect } from 'dva';
import RightTableComponent from '../../components/RightTable'

function RightTableContainer(props){

    const {RightName,dispatch} = props.Rdata

    function handleDelete(id) {
        dispatch({
          type: 'products/delete',
          payload: id,
        });
      }

    return(
        <RightTableComponent onDelete={handleDelete} RightName={RightName}/>
    )
}

export default connect(Rdata => Rdata)(RightTableContainer)