import { message } from "antd";

import APIFunction from '../services/getRD'
const {
  getRightData,
  getLeftData,
  getRightDrawerData,
  getToken
} = APIFunction

export default {
    namespace: 'GetData',
    state: {
        RightData: [],
        LeftData: [],
        RightDrawerData: [],
        RightDrawerSearchData: [],
        isLoading: false,
        token: [],
        tokenUserInfo: []
    },

    effects: {

      //获取右边表格数据
      *getRightTableData({payload},{call,put}){
        // console.log("我是models的getRightTableData")
        try{
          const response = yield call(getRightData,payload)
          // console.log('我是response',response)
          // console.log('我是response的list',response.list)
          if(response.status == 200){
            yield put({
              type: 'saveRightData',
              payload: response.data.list
            })
          }else{
            message.error('未请求到RightTableData数据')
          }

          return response
        }catch(error){
          return false
        }

      },

      *getRightDrawerData({payload},{call,put}){
        try{
          const response = yield call(getRightDrawerData,payload)
          // console.log("我是Drawer的数据",response)
          if(response){
            yield put({
              type: 'saveRightDrawerData',
              payload: response.data.list
            })
          }else{
            message.error('未请求到RightDrawer数据')
          }
        }catch(error){
          return false
        }
      },

      *getLeftTableData({payload},{call,put}){
        // console.log("我是models的getLeftTableData")
        try{
          const response = yield call(getLeftData,payload)

          if(response?.code==200){
            yield put({
              type: 'saveLeftData',
              payload: response.list
            })
          }else{
            message.error('未请求到数据')
          }

          return response
        }catch(error){
          return false
        }

      },

      *getToken({payload},{call,put}){
        const response = yield call(getToken)
        // console.log("返回的token用户信息",response)
        if(response.status == 200){
          yield put({
            type: 'saveData',
            payload: {
              tokenUserInfo: response.data
            }
          })
        }else{
          message.error('未验证成功')
        }
      }


    },

    reducers: {
      saveData(state,{payload}){
        return{
          ...state,
          ...payload
        }
      },
      saveIsLoading(state,{payload}){
        // console.log("我是payload",payload)
        return{
          ...state,
          isLoading: payload
        }
      },
      delete(state, { payload: id }) {
        const RD = state.RightData.filter(item => item.id !== id)
        return {
          ...state,  //需要通过这种方式才能使改后的值更新到页面上
          RightData: RD
        }
      },
      saveRightData(state,{payload}){
        return{
          ...state,
          RightData: payload
        }
      },
      saveLeftData(state,{payload}){
        return{
          ...state,
          LeftData: payload
        }
      },
      saveRightDrawerData(state,{payload}){
        return{
          ...state,
          RightDrawerData: payload
        }
      },
      searchRightDrawerPatient(state,{payload}){
        const targetPatient = state.RightDrawerData.filter((item,index)=>
          item.name==payload.name
        )
        return{
          ...state,
          RightDrawerSearchData: targetPatient
        }
      },
      addRightDrawerSelectedValue(state,{payload}){
        payload.map(item=>{
          state.RightData.push(item)
        })
        return{
          ...state,
          RightData: state.RightData
        }
      }

    },
  };