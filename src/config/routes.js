/*@Description: 目前实现了一级路由 未能实现二级路由即子路由
 * @Author: 
 * @Date: 
 * @LastEditTime: 
 * @LastEditors: 
 * @LastDescription: 
 * @FilePath: 
*/

// const path = require('path')
module.exports = [
    //以下component都是相对于pages这个目录的
    {
      exact: true,
      path: '/',
      component: '../pages/index.jsx',
    },
    {
      exact: true,
      path: '/login',
      component: '../pages/LoginForm.jsx',
    },
    {
      exact: true,
      path: '/test',
      component: '../pages/test.jsx',
      
    },
    

]