import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Forms extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />,
          )}
        </Form.Item>
      </Form>
    );
  }
}
const mapPropsToFields=(props)=>{
    // console.log(props.initData);
    var obj = {};
    for(var key in props.initData){
        var val = props.initData[key];
        obj[key] = Form.createFormField({value:val});
    }
    return obj;
}
export default Form.create({mapPropsToFields})(Forms);
