
import React from 'react'
import { withRouter } from 'umi'
import {axios} from '../utils/axios_request'
import { message } from "antd";

class User extends React.Component{
    async componentDidMount(){
        const {history} = this.props
        const {data} = await axios({
            url: 'http://localhost:7000/test/',
            method: 'POST'
        })
        console.log("data",data)
        if(data.msg === '未授予token或token已过期'){
            message.error("请重新登录!")
            history.push('/login')
        }
    }
    render(){
        return(
            <div>
                333
            </div>
        )
    }
} 
export default withRouter(User)