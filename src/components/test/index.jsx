import React, { Component } from 'react'

export default class index extends Component {

    //无论是通过 constructor 获取传递过来的 props 还是直接通过 this.props 都能读取到 props 的值
    constructor(props){
        super(props)
        this.state={
            name: this.props.name
        }
    }
    

    render() {
        const name = this.props.name
        return (
            <div>
                {/* 我是{this.state.name} */}
                我是{name}
            </div>
        )
    }
}
