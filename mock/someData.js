// export default {
//   // 支持值为 Object 和 Array
//   'GET /api/users': { users: [1, 2] },

//   // GET 可忽略
//   '/api/users/1': { id: 1 },

//   // 支持自定义函数，API 参考 express@4
//   'POST /api/users/create': (req, res) => {
//     // 添加跨域请求头
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.end('ok');
//   },
// }






// const responseData = {
//     status: 'ok',
//     code: 200,
//     data: 
//     [
//       {
//         id: 1,
//         name: '小慧',
//         age: 22
//     },
//     {
//         id: 2,
//         name: '小浩',
//         age: 23
//     },
//   ]

//   }
  
//   export default {
//     // 支持值为 Object 和 Array
//     'GET /appservice/common/v1/getSomeData': responseData,
  
//     // GET POST 可省略 比如：
//     '/api/users/1': { id: 1 },
//   }


import mockjs from 'mockjs';
import { delay } from 'roadhog-api-doc';

const mock = {
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/RightData': mockjs.mock({
    'list|50': [{
      id: '@range(100)',
      reportDept: '@city',
      'number|+1': 0,
      'patientId|10000-20000': 1,
      completionDate: '@now("second")',
      'outpatient|300000-400000': 1,
      name: '@cname',
      sex: '@string("男女",1,1)',
      'age|1-99': 1,
      isExamined: '@string("是否",1,1)',
      occupation: '@String("有无",1,1)',
      address: '@county(true)',
      diseaseName: '@ctitle',
    }],
  }),
  //右边抽屉数据
  'GET /api/RightDrawerData': mockjs.mock({
    'list|10': [{
      id: '@range(101,110)',
      reportDept: '@city',
      'number|+1': 0,
      'patientId|10000-20000': 1,
      completionDate: '@now("second")',
      'outpatient|300000-400000': 1,
      name: '@cname',
      sex: '@string("男女",1,1)',
      'age|1-99': 1,
      isExamined: '@string("是否",1,1)',
      occupation: '@String("有无",1,1)',
      address: '@county(true)',
      diseaseName: '@ctitle',
    }],
  }),
  ///drugapi/api/WardApplyService/QueryWardBaseDrugs
  'GET /api/LeftData':mockjs.mock({
    'code': '200',
    'list|26': [{
      'key|+1': 0,
      'drname|3-7': '@string(true)',
      'drserch|2-3': '@string(true)',
      'pack_spec|0-300': 1,
      'drtype_nm|1-3': '@string(true)',
      'packunit|10-100': 10,
      'storage_num|100-200': 10,
    }],
  }),
};

//模拟网络延时 单位ms
export default delay(mock, 300);