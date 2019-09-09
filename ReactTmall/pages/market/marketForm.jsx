import { Form, Icon, Input, Button, Checkbox } from 'antd';
const {TextArea} = Input;
class marketForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" {...formItemLayout}>
                <Form.Item label="用户名">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input placeholder="请输入用户名" />,
                    )}
                </Form.Item>
                <Form.Item label="微信号">
                    {getFieldDecorator('wxid', {
                        rules: [{ required: true, message: 'Please input your wxid!' }],
                    })(
                        <Input placeholder="请输入微信号" />,
                    )}
                </Form.Item>
                <Form.Item label="手机号">
                    {getFieldDecorator('telephone', {
                        rules: [{ required: true, message: 'Please input your telephone!' }],
                    })(
                        <Input placeholder="请输入手机号" />,
                    )}
                </Form.Item>
                <Form.Item label="QQ">
                    {getFieldDecorator('qq')(
                        <Input placeholder="请输入QQ号" />,
                    )}
                </Form.Item>
                <Form.Item label="登录密码">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input type="password" placeholder="请输入登录密码" />,
                    )}
                </Form.Item>
                <Form.Item label="抽成比例">
                    {getFieldDecorator('ratio', {
                        rules: [{ required: true, message: 'Please input your ratio!' }],
                    })(
                        <Input placeholder="请输入抽成比例" />,
                    )}
                </Form.Item>
                <Form.Item label="备注">
                    {getFieldDecorator('comment')(
                        <TextArea placeholder="请输入备注" autosize={{ minRows: 2, maxRows: 6 }} />
                    )}
                </Form.Item>
            </Form>
        );
    }
}
const mapPropsToFields = (props) => {
    var obj = {};
    for (var key in props.initData) {
        var val = props.initData[key];
        obj[key] = Form.createFormField({ value: val });
    }
    return obj;
}
export default Form.create({ mapPropsToFields })(marketForm);
