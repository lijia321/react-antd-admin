import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Spin } from 'antd';
import { withRouter } from 'react-router'
import { LeanRT } from '../Conversation/index'
import './index.less'
class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loginFlag: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const self = this;
                this.setState({ loginFlag: true })
                LeanRT.realtime.createIMClient(`${values.username}`).then(function (data) {
                    console.log(data)
                    self.setState({ loginFlag: false }, () => {
                        localStorage.setItem('isLogin', '1');
                        self.props.history.push('/main')
                    })

                    // 成功登录
                }).catch(console.error);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login-container'>
                <Spin spinning={this.state.loginFlag} size='large' tip='登录中...'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
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
                            })(<Checkbox>Remember me</Checkbox>)}
                            <span className="login-form-forgot" >
                                忘记密码
                        </span>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                    </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>

        );
    }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);
export default withRouter(WrappedLoginForm)
