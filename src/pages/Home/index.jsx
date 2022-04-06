// 这是入口界面

import React,{useState, useEffect} from 'react'
import { withRouter } from 'umi';
import { connect } from 'dva';
import decode from 'jwt-decode';

class Home extends React.Component {
  render() {
    return <iframe 
      height={'100%'}
      width={'100%'}
      id={'indexIframe'}
      src={'https://www.w3school.com.cn/htmldom/dom_obj_iframe.asp'}
    />
  }
}

export default connect(({GetData})=>({GetData}))(withRouter(Home))

// function Index (props) {
  
//   //依照sideBar的key显示对应组件
//   //...

//   const [tokenUserInfo, setTokenUserInfo] = useState([])
//   const [isReturn, setIsReturn] = useState(false)
  
//   state={
//     tokenUserInfo: [],
//     isReturn: false,
//   }

//   const verify = async ()=>{
//     const { dispatch } = props
//     console.log('1')
//     await dispatch({
//       type: 'GetData/getToken',
//       callback: (data) => {
//         setTokenUserInfo(data)
//         console.log('2')
//         if(data.status === '1'){
//           const token = localStorage.getItem('@#@TOKEN')
//           const tk = decode(token)
//           // console.log('token/index',token)
//           if(token){
//             try{
//               dispatch({
//                 type: 'GetData/saveData',
//                 payload: {token: tk}
//               })
//             }catch{  // 报错
//               localStorage.removeItem("@#@TOKEN")
//               window.location.href = '/login'
//             }
//           }
//         }else{
//           localStorage.removeItem("@#@TOKEN")
//           window.location.href = '/login'
//         }
//         console.log('6')
//       }
//     })
//     console.log('3')
//   }

//   useEffect(() => {
//     verify()
//     window.parent.postMessage({
//       age: '小慧'
//     },
//     'http://10.1.18.210:8010'
//     )
//     console.log('4')
//     setIsReturn(true)
//     console.log('5')
//   },[]) // 指定空数组，只在组件挂载时（刷新）执行一次


//   const {location} = props
//   // const { tokenUserInfo } = this.props.GetData
//   console.log('是render内的isReturn',isReturn)
//   if(isReturn == true && tokenUserInfo.status == '1'){
//     if(location.pathname === '/'){
//       return(
//         <div style={{height:'100vh', overflow: 'hidden'}}>
//           {/* header */}
//           <Row>
//             <Header />
//           </Row>
//           {/* body */}
    
//           <Row>
//               <Col span={3}>
//                   <SideBar 
//                     // onClickDepRec={onClickDepRec} 
//                     // onClickAdmitPatientList={onClickAdmitPatientList}
//                     // onClickLeavePatientList={onClickLeavePatientList}
//                     // onClickToChangeRightContent={onClickToChangeRightContent}
//                   />
//               </Col>
    
//               <DepRecMedicineContainer />
    
    
              
//           </Row>
    
//         </div>
//       )
//     }else{
//       return(
//         <>
//           {props.children}
//         </>
//       )
//     }
//   }else{
//     return <Spin />
//   }
  
 
// }
// export default connect(({GetData})=>({GetData}))(withRouter(Index))
