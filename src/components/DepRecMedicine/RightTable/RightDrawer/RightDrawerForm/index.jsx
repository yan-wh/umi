import React, { useEffect, useState } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.less'

function NormalLoginForm(props){

  const {dispatch} = props

  useEffect(()=>{
    dispatch({
      type: 'GetData/getRightDrawerData',
    })
    
  },[dispatch])

  const handleSubmit = e => {
    e.preventDefault();
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
      }
    });
  };

  const { getFieldDecorator } = props.form;
  // console.log("我是筛选过后的数据",)
    
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item className="form-item-name">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input patient name!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="text"
            placeholder="姓名"
            style={{width: '150px'}}
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
            style={{width: '150px'}}
          />,
        )}
      </Form.Item>
      <Form.Item className="form-item-button">
        <Button type="primary" htmlType="submit" className="login-form-button">
          搜寻病人
        </Button>
      </Form.Item>
    </Form>
  );
  
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
// export default connect(({GetData})=>({GetData}))(WrappedNormalLoginForm)
export default WrappedNormalLoginForm
