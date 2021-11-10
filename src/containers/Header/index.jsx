import React from 'react'
import HeaderComponent from '@/components/Header'
import { connect } from 'dva'

function HeaderContainer(props){

    return(
        <HeaderComponent {...props}/>
    )
}

export default connect(({GetData})=>({GetData}))(HeaderContainer)