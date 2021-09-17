module.exports = [
    //以下component都是相对于pages这个目录的
    {
      exact: true,
      path: '/',
      component: '../pages/index.jsx',
      // routers: [
      //   {exact: true, path: '/user', component: '../pages/user.jsx'},
        
      // ]
    },
    {
      exact: true,
      path: '/login',
      component: '../pages/LoginForm.jsx'
    },
    {
      exact: true,
      path: '/index',
      component: '../layouts/BasicLayout.jsx',
      
    },
    {
      exact: true,
      path: '/test',
      component: '../pages/test.jsx',
      
    },

]