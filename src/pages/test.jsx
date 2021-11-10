/*@Description: 测试页面
 * @Author: 
 * @Date: 
 * @LastEditTime: 
 * @LastEditors: 
 * @LastDescription: 
 * @FilePath: 
*/


import React,{useEffect, useState} from 'react'
import { withRouter } from 'umi'
import {axios} from '../utils/axios_request'
import { message } from "antd";
import Index from '../components/test'


function Test (props){

    const [count, setCount] = useState(0)
    useEffect(() => {
        const id = setTimeout(() => {
          setCount(count + 1); // 这个 effect 依赖于 `count` state
        }, 2000);
        return () => clearTimeout(id);
    }, [count]);  // Bug: `count` 没有被指定为依赖

    // useEffect(() => {
    //     const id = setInterval(() => {
    //       setCount(count + 1); // 这个 effect 依赖于 `count` state
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, [count]);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //       setCount(c => c + 1); // ✅ 在这不依赖于外部的 `count` 变量
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []); // ✅ 我们的 effect 不使用组件作用域中的任何变量

    return(
        <div>第{count}次React Hook学习</div>
    )
}

export default Test

// class User extends React.Component{
//     // async componentDidMount(){
//     //     const {history} = this.props
//     //     const {data} = await axios({
//     //         url: 'http://localhost:7000/test/',
//     //         method: 'POST'
//     //     })
//     //     console.log("data",data)
//     //     if(data.msg === '未授予token或token已过期'){
//     //         message.error("请重新登录!")
//     //         history.push('/login')
//     //     }
//     // }

//     constructor(props) {
//         super(props);

//         this.state = {
//             message: "Hello World",
//             count: 0,
//             number: 0,
//             name: '小文'
//         }
//     }

//     changeText() {
//         this.setState({
//             message: "JS每日一题"
//         })
//         // 1
//         this.setState({
//             count: this.state.count + 1,
//         })
//         console.log(this.state.count) // 1
    
//         // 2
//         this.setState({
//             count: this.state.count + 1,
//         })
//         console.log(this.state.count) // 1
    
//         // 3
//         this.setState({
//             count: this.state.count + 1,
//         })
//         console.log(this.state.count) // 1

//         // -------------------------------
//         // 1
//         this.setState({
//             number: this.state.number + 1,
//         })
//         console.log(this.state.number) // 1
    
//         // 2
//         this.setState({
//             number: this.state.number + 1,
//         })
//         console.log(this.state.number) // 1
    
//         // 3
//         this.setState({
//             number: this.state.number + 1,
//         })
//         console.log(this.state.number) // 1
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.message}</h2>
//                 <button onClick={e => this.changeText()}>面试官系列: {this.state.count} - {this.state.number}</button>
//                 <Index name={this.state.name}/>
//             </div>
//         )
//     }

//     // render(){
//     //     return(
//     //         <div>
//     //             333
//     //         </div>
//     //     )
//     // }
// } 
// export default withRouter(User)