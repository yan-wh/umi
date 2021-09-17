import { message, Select } from "antd";
import isEmpty from 'lodash/isEmpty'
import decode from 'jwt-decode'
import {request} from '@/utils/axios_request'

import APIFunction from '../services/getRD'


const {
    getUserInfo,
} = APIFunction

export default {
    namespace: 'login',
    state: {
        userInfo: [],
        isAuth: false,
    },

    effects: {

      //获取用户信息
      *getUserInfo({payload,callback},{call,put,select}){
        console.log("payload类型",Object.prototype.toString.call(payload))

        // console.log("我是payload",payload)
        // let formdata = new FormData()
        // formdata.append('phone',payload.phone)
        // formdata.append('password',payload.password)
        // console.log("我是formdata",formdata.getAll('phone'))

        // 当接口请求成功，不会出现问题。但当接口出现报错，yield就不会往下执行了。并且再次dispatch也无效。所以我们需要用try catch包裹 yield语句
        try{
          // yield表示：Generator 就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。
          console.log("开始请求")
          const response = yield call(request,payload)  //单独写成axios请求，进行接口测试，call返回return的值
          console.log("请求结束")

          const tk = decode(response.data.token)
          localStorage.setItem("@#@TOKEN", tk)
          localStorage.setItem("@#@TOKEN",response.data.token)
          console.log('我是解密过后的token',tk)
          // console.log("我是解析token后的值",data)
          // console.log("我是response的数据类型",Object.prototype.toString.call(response))
          
          if(response.status == 200){
            // console.log("userInfo",response.data)
            yield put({
              type: 'saveData',
              payload: {
                // userInfo: response.data.userInfo,
                // isAuth: !isEmpty(response.data.userInfo)
                isAuth: !isEmpty(tk)
              }
            })
            // window.location.href='/'  //登录成功跳转到首页
          }else{
            message.error(`请求服务器失败`)
          }

        }catch(error){
          console.log(error)
        }

        // 等到上面修改完isAuth的值之后再获取isAuth的值，此时的值才是更新过后的值
        const { isAuth } = yield select(state=>state.login)
        callback(isAuth)

      },

    },

    reducers: {
      saveData(state,{payload}){
        // console.log("我是payload",payload.isAuth)
        return{
          ...state,
          ...payload
        }
      },
    },
  };