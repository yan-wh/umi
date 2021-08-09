import { message } from "antd";

import APIFunction from '../services/getRD'
const { getRightData } = APIFunction

export default {
    namespace: 'Rdata',
    state: {
        RightData: [],
        
    },

    effects: {

      //获取右边表格数据
      *getRightTableData({payload},{call,put}){
        console.log("我是models的getRightTableData")
        try{
          const response = yield call(getRightData,payload)
          console.log('我是response',response.data)
          if(response?.code=="200"){
            yield put({
              type: 'saveRightData',
              payload: response.data
            })
          }else{
            message.error('未请求到数据')
          }

          return response
        }catch(error){
          return false
        }

      }

    },

    reducers: {
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
      }
    },
  };