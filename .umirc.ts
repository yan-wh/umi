import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  // 以下为配置式路由，去除即可实现约定式路由
  routes: [
    //以下component都是相对于pages这个目录的
    {
      exact: true,
      path: '/',
      component: '../pages/index.jsx'
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


  ],
  disableCSSModules: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-demo',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
