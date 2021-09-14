import React from "react";
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './index.less'
import harry from '@/static/harry.png'

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = { apiResponse: null };
    }

    // callAPI() {
    //     fetch("http://localhost:9000/to/Login")
    //         .then(res => res.text())
    //         .then(res => this.setState({ apiResponse: res }))
    //         .catch(err => err);
    // }

    // componentDidMount() {
    //     this.callAPI();
    // }

    handleSubmit = e => {
        e.preventDefault();
        const {dispatch} = this.props
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log("我是表单values",values)
            // console.log('Received values of form: ', values);
            dispatch({
                type: 'login/getUserInfo',
                payload: values
            })
          }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            // <>
            //     <div dangerouslySetInnerHTML={{__html: this.state.apiResponse}} />
            // </>
            <div className="form-container" style={{background: `url(${harry}) no-repeat`,backgroundAttachment: 'fixed', backgroundPosition: 'center center',backgroundSize: '100% 100%'}}>
                <Form 
                    onSubmit={this.handleSubmit} 
                    className="login-form"
                    layout='vertical'
                >
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone!' }],
                        })(
                            <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Phone"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}
const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect(({login})=>({login}))(LoginForm)