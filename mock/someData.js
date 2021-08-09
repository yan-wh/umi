const responseData = {
    status: 'ok',
    code: 200,
    data: [{
        id: 1,
        name: '小慧',
        age: 22
    },{
        id: 2,
        name: '小浩',
        age: 23
    }]
  }
  
  export default {
    // 支持值为 Object 和 Array
    'GET /appservice/common/v1/getSomeData': responseData,
  
    // GET POST 可省略 比如：
    '/api/users/1': { id: 1 },
  }