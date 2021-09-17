import axios from 'axios'


axios.interceptors.request.use(config => {
  const passURL = ['/toLogin', '/toRegister']
  if(passURL.includes(config.url)){
    return config
  }

  const tk = localStorage.getItem("@#@TOKEN")
  if(tk){
    config.headers.Authorization = 'Bearer ' + tk
    // console.log("Bearer",config.headers.Authorization)
  }else{ //没有token
    delete config.headers.Authorization
  }
  return config
})

const request = (formdata)=>{
    return axios({  //axios返回的是Promise对象
      method: 'POST',
      url: 'http://localhost:7000/toLogin/',
      // withCredentials: true,
      data: formdata,
    }).then(res=>{
      console.log("我是从服务器返回的数据",res)
      return res
    }).catch(error=>{
      console.log("请求服务器失败",error)
    })

}
export {request, axios}