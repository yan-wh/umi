// 这是入口界面

import React,{useState, useEffect} from 'react'
import { withRouter } from 'umi';
import { connect } from 'dva';
import decode from 'jwt-decode';
import { Row, Col, Spin, } from 'antd'
import {NavLink} from 'umi'
// import { Route, Switch } from 'umi/router';


import Header from '@/containers/Header'
import SideBar from '@/containers/SideBar' 
import DepRecMedicineContainer from '@/containers/DepRecMedicine'
import AdmitPatientListContainer from '@/containers/PatientList/AdmitPatientList'
import LeavePatientListContainer from '@/containers/PatientList/LeavePatientList'

function Index (props) {
  
  //依照sideBar的key显示对应组件
  //...

  const [tokenUserInfo, setTokenUserInfo] = useState([])
  const [isReturn, setIsReturn] = useState(false)
  
  const verify = async ()=>{
    const { dispatch } = props
    console.log('1')
    await dispatch({
      type: 'GetData/getToken',
      callback: (data) => {
        setTokenUserInfo(data)
        console.log('2')
        if(data.status === '1'){
          const token = localStorage.getItem('@#@TOKEN')
          const tk = decode(token)
          // console.log('token/index',token)
          if(token){
            try{
              dispatch({
                type: 'GetData/saveData',
                payload: {token: tk}
              })
            }catch{  // 报错
              localStorage.removeItem("@#@TOKEN")
              window.location.href = '/login'
            }
          }
        }else{
          localStorage.removeItem("@#@TOKEN")
          window.location.href = '/login'
        }
        console.log('6')
      }
    })
    console.log('3')
  }

  useEffect(() => {
    verify()
    console.log('4')
    setIsReturn(true)
    console.log('5')
  },[verify]) // 指定空数组，只在组件挂载时（刷新）执行一次


  const {location} = props
  // const { tokenUserInfo } = this.props.GetData
  console.log('是render内的isReturn',isReturn)
  if(isReturn == true && tokenUserInfo.status == '1'){
    if(location.pathname === '/'){
      return(
        <div style={{height:'100vh', overflow: 'hidden'}}>
          {/* header */}
          <Row>
            <Header />
          </Row>
          {/* body */}
    
          <Row>
              <Col span={3}>
                  <SideBar 
                    // onClickDepRec={onClickDepRec} 
                    // onClickAdmitPatientList={onClickAdmitPatientList}
                    // onClickLeavePatientList={onClickLeavePatientList}
                    // onClickToChangeRightContent={onClickToChangeRightContent}
                  />
              </Col>
    
              <DepRecMedicineContainer />
    
    
              
          </Row>
    
        </div>
      )
    }else{
      return(
        <>
          {props.children}
        </>
      )
    }
  }else{
    return <Spin />
  }
  
 
}
export default connect(({GetData})=>({GetData}))(withRouter(Index))

// @connect(({GetData})=>({GetData}))
// class Index extends React.Component {
  
//   //依照sideBar的key显示对应组件
//   //...

//   constructor(props){
//     super()
//     this.state = {
//       tokenUserInfo: [],
//       isReturn: false
//     }
//   }
  
//   verify = async ()=>{
//     const { dispatch } = this.props
//     await dispatch({
//       type: 'GetData/getToken',
//       callback: (data) => {
//         // console.log('data',data)
//         this.setState({
//           tokenUserInfo: data
//         },()=>{
//           if(this.state.tokenUserInfo.status === '1'){
//             const token = localStorage.getItem('@#@TOKEN')
//             const tk = decode(token)
//             // console.log('token/index',token)
//             if(token){
//               try{
//                 dispatch({
//                   type: 'GetData/saveData',
//                   payload: {token: tk}
//                 })
//               }catch{  // 报错
//                 localStorage.removeItem("@#@TOKEN")
//                 window.location.href = '/login'
//               }
//             }
//           }else{
//             localStorage.removeItem("@#@TOKEN")
//             window.location.href = '/login'
//           }
//         })
//       }
//     })
//   }

//   componentDidMount(){
//     setTimeout(()=>{
//       this.verify()
//       this.setState({
//         isReturn: true
//       })
//     },1000)
//   }


//   render(){
//     const {location} = this.props
//     // const { tokenUserInfo } = this.props.GetData
//     console.log('是render内的tokendata',this.state.tokenUserInfo)
//     if(this.state.isReturn == true && this.state.tokenUserInfo.status == '1'){
//       if(location.pathname === '/'){
//         return(
//           <div style={{height:'100vh', overflow: 'hidden'}}>
//             {/* header */}
//             <Row>
//               <Header />
//             </Row>
//             {/* body */}
      
//             <Row>
//                 <Col span={3}>
//                     <SideBar 
//                       // onClickDepRec={onClickDepRec} 
//                       // onClickAdmitPatientList={onClickAdmitPatientList}
//                       // onClickLeavePatientList={onClickLeavePatientList}
//                       // onClickToChangeRightContent={onClickToChangeRightContent}
//                     />
//                 </Col>
      
//                 <DepRecMedicineContainer />
      
      
                
//             </Row>
      
//           </div>
//         )
//       }else{
//         return(
//           <>
//             {this.props.children}
//           </>
//         )
//       }
//     }else{
//       return <Spin />
//     }
    
//   }
  
  
 
// }
// export default withRouter(Index)
