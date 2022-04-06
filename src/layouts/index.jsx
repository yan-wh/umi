import React from 'react';
import { withRouter, Link, history } from 'umi';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider, Spin, Menu, Icon, Layout, Avatar, message } from 'antd';
import { connect } from 'dva';
// import styles from './index.css';

const { SubMenu } = Menu
const { Sider, Header, Content } = Layout

class BasicLayout extends React.Component {
  // return <div style={{ padding: 20 }}>{ props.children }</div>

  state = {
    collapsed: false,
  };


  componentDidMount(){
    // console.log(document.body)
    // window.addEventListener('beforeunload', (e) => {
    //     // e.preventDefault();
    //     // e.returnValue='确定离开吗？';
    //     message.success('刷新页面了')
    //     history.push('/');
    //     console.log('props', this.props)
    // }, false)

    setTimeout(()=>{
      console.log('history', history)
      // history.push('/')
    },1000)
  }
  // componentWillUnmount(){
  //   window.removeEventListener('beforeunload', () => {
  //       console.log('已卸载监听')
  //   }, false)
  // }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  //一系列登录操作
  // state = {
  //   collapsed: false,
  //   tokenUserInfo: [],
  //   isReturn: false,
  // };

  // componentDidMount(){
  //   this.verify()
  //   this.setState({isReturn: true})
  // }

  // verify = async ()=>{
  //   const { dispatch } = this.props
  //   console.log('1')
  //   await dispatch({
  //     type: 'GetData/getToken',
  //     callback: (data) => {
  //       this.setState({tokenUserInfo: data})
  //       console.log('2')
  //       if(data.status === '1'){
  //         const token = localStorage.getItem('@#@TOKEN')
  //         const tk = decode(token)
  //         // console.log('token/index',token)
  //         if(token){
  //           try{
  //             dispatch({
  //               type: 'GetData/saveData',
  //               payload: {token: tk}
  //             })
  //           }catch{  // 报错
  //             localStorage.removeItem("@#@TOKEN")
  //             window.location.href = '/login'
  //           }
  //         }
  //       }else{
  //         localStorage.removeItem("@#@TOKEN")
  //         window.location.href = '/login'
  //       }
  //       console.log('6')
  //     }
  //   })
  //   console.log('3')
  // }

  // if(this.state.isReturn == true && this.state.tokenUserInfo.status == '1'){
  //   if(location.pathname === '/home'){
  //     return ()
  //   }
  // }else{
  //   return <Spin />
  // }

  onClick=(item, key, keyPath, domEvent)=>{
    // console.log('key', key)
    // console.log('item', item)
    // console.log('keyPath', keyPath)
    // console.log('domEvent', domEvent)
    const { dispatch } = this.props
    dispatch({
      type: 'GetData/reducer',
      payload: {
        selectedItemKey: [item.key]
      }
    })
  }

  render(){
    // console.log('props', this.props)
    const { selectedItemKey } = this.props.GetData
    return (
      <ConfigProvider locale={zh_CN} >
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '10px auto'}}>
              <Avatar src={require('../assets/img/jj.jpg')} shape='circle' size={50}/>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={selectedItemKey} onClick={this.onClick}>
              <Menu.Item key="1">
                <Link to={'/'}>
                  <div>
                    <Icon type="pie-chart" />
                    <span>科室患者查询</span>
                  </div>
                </Link>
              </Menu.Item>
              {/* <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item> */}
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3"><Link to={'/AdmitPatients'}>测试页</Link></Menu.Item>
                {/* <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              {this.props.children}
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
          </Layout>
        </Layout>  
      </ConfigProvider>
    )
  }
  
};
export default connect(({GetData}) => ({GetData}))(withRouter(BasicLayout));

// const BasicLayout: React.FC = props => {
//   return (
//     <div className={styles.normal}>
//       3366
//       {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
//       {props.children}
//     </div>
//   );
// };

// export default BasicLayout;
