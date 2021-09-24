import React, { useEffect, useState } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less'

function NormalLoginForm(props){

  const {dispatch, handleChangeIsClickSearchPatientBtnValue,isClickSearchPatientBtn} = props
  // console.log("我是handleChangeIsClickSearchPatientBtnValue",handleChangeIsClickSearchPatientBtnValue)

  useEffect(()=>{
    dispatch({
      type: 'GetData/getRightDrawerData',
    })
    
  },[dispatch])

  const handleSubmit = e => {
    e.preventDefault();
    if(isClickSearchPatientBtn==true){
      handleChangeIsClickSearchPatientBtnValue()
    }
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        dispatch({
          type: 'GetData/searchRightDrawerPatient',
          payload: {
            name: values.name,
            sex: values.sex
          }
        })
        handleChangeIsClickSearchPatientBtnValue()
      }
    });
    // resetFields是一个函数，这个函数接收一个数组（该数组是一个字符串数组，就是getFieldDecorator里面的id值，要改哪个就把哪个写到数组里）为参数
    props.form.resetFields()  // resetFields 重置一组输入控件的值（为 initialValue）与状态，如不传入参数，则重置所有组件
  };

  const { getFieldDecorator } = props.form;
  // console.log("我是筛选过后的数据",)
    
  return (
    <div style={{width: '100%', height: '30%', boxSizing: 'border-box'}}>
      <Form onSubmit={handleSubmit} className="search-form">
        <Form.Item className="form-item-name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input patient name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="姓名"
              // style={{width: '150px'}}
            />,
          )}
        </Form.Item>
        <Form.Item className="form-item-sex">
          {getFieldDecorator('sex', {
            rules: [{ required: true, message: 'Please input patient sex!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="性别"
              // style={{width: '150px'}}
            />,
          )}
        </Form.Item>
        <Form.Item className="form-item-button">
          {isClickSearchPatientBtn?
          <Button type="primary" htmlType="submit" className="login-form-button">
            返回
          </Button>
          :
          <Button type="primary" htmlType="submit" className="login-form-button">
            搜寻病人
          </Button>
          }
        </Form.Item>
      </Form>
    </div>
  )
  
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
// export default connect(({GetData})=>({GetData}))(WrappedNormalLoginForm)
export default WrappedNormalLoginForm
