import axios from 'axios'

const request = (formdata)=>{
    // return new Promise((resolve,reject)=>{
    //     axios({
    //         method: 'post',
    //         url: 'http://localhost:7000/login',
    //         data: formdata,
    //       }).then(res=>{
    //         console.log("我是从服务器返回的数据",res)
    //         resolve(res)
    //       }).catch(error=>{
    //         console.log("请求服务器失败",error)
    //         reject(error)
    //       })
    // })

    return axios({  //axios返回的是Promise对象
      method: 'post',
      url: 'http://localhost:7000/login',
      data: formdata,
    }).then(res=>{
      console.log("我是从服务器返回的数据",res)
      return res
    }).catch(error=>{
      console.log("请求服务器失败",error)
    })

}
export default request