import { message } from "antd";

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

      //获取右边表格数据
      *getUserInfo({payload},{call,put}){
        // console.log("我是models的getRightTableData")
        let formdata = new FormData()
        formdata.append('nickname',payload.username)
        formdata.append('password',payload.password)
        try{
          const response = yield call(getUserInfo,formdata)  //单独写成axios请求，进行接口测试
          // console.log('我是response',response)
          // console.log('我是response的list',response.list)
          if(response){
            yield put({
              type: 'saveData',
              payload: response.data
            })
          }else{
            message.error('数据库中不存在此人，请注册!')
          }

          return response
        }catch(error){
          return false
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