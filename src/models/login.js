import { message } from "antd";

import request from '@/utils/axios_request'

import APIFunction from '../services/getRD'


const {
    getUserInfo,
} = APIFunction

export default {
    namespace: 'login',
    state: {
        userInfo: null,
    },

    effects: {

      //获取用户信息
      *getUserInfo({payload},{call,put}){
        console.log("payload类型",Object.prototype.toString.call(payload))
        // console.log("我是payload",payload)
        // let formdata = new FormData()
        // formdata.append('phone',payload.phone)
        // formdata.append('password',payload.password)
        // console.log("我是formdata",formdata.getAll('phone'))

        // 当接口请求成功，不会出现问题。但当接口出现报错，yield就不会往下执行了。并且再次dispatch也无效。所以我们需要用try catch包裹 yield语句
        try{
          const response = yield call(request,payload)  //单独写成axios请求，进行接口测试，call返回return的值
          // const response = request(payload)
          console.log('我是response',response)
          console.log("我是response的数据类型",Object.prototype.toString.call(response))
          
          if(response.status == 200){
            yield put({
              type: 'reducers',
              payload: response.data
            })
            window.location.href='/'
          }else{
            message.error(`请求服务器失败`)
          }
        }catch(error){
          console.log(error)
        }

      },


    },

    reducers: {
      saveData(state,{payload}){
        // console.log("我是payload",payload)
        return{
          ...state,
          userInfo: payload
        }
      },
    },
  };