import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  // 以下为配置式路由，去除即可实现约定式路由
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       {
  //         exact: true, 
  //         path: '/index', 
  //         component: '../pages/index.jsx',
  //         routes: [
  //           {exact: true, path: '/index/DepRecMedicine', component: '@/components/test/index.jsx'}
  //         ]
  //       }
  //     ]
  //   }
  // ],
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
