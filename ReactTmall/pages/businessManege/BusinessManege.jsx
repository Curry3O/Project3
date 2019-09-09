import React from 'react';
import styles from './business.less';
import { Input, Button, Table, Icon, Modal, Form, Select, notification } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import dateParse from '@/filter/index';
const { Option } = Select;
class BusinessManege extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      putForm: {},
      form: {
        page: 0,
        pageSize: 6,
        siteId: 2,
      },
      visible: false,
    })
  }
  componentWillMount(){
    this.props.dispatch({ type:'business/fetchLoadBusiness',payload:this.state.form});
  }
  search = () => {
    this.props.dispatch({ type: 'business/fetchLoadBusiness', payload: this.state.form })
  }
  changeBusinessUsername = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        username: event.target.value
      }
    })
  }
  changeBusinessId = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        id: event.target.value
      }
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      visible: false,
    });
    (function openNotification() {
      notification.open({
        message: '成功',
        description: '正在下载...',
        icon: <Icon type="check-circle" style={{ color: 'green', fontSize: "30px" }} />,
      });
    })()
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
    (function openNotification(){
      notification.open({
        message: '消息',
        description: '已取消',
        icon: <Icon type="exclamation-circle" style={{ color: 'red', fontSize: "30px" }} />,
      });
    })()
  };
  toDetails=(record)=>{
    this.props.history.push({
      pathname: './businessManege/businessDetails',
      state: {
        date: record
      }
    })
  }
  render(){
    const columns = [
      {
        title: '商家ID',
        width: 100,
        dataIndex: 'id',
        align: 'center',
        fixed: 'left',
        render: (text, record) => <a onClick={this.toDetails.bind(this, record)}>{text}</a>,
      },
      {
        title: '用户名',
        width: 100,
        dataIndex: 'username',
        align: 'center',
      },
      {
        title: '手机',
        dataIndex: 'telephone',
        width: 100,
        align: 'center'
      },
      {
        title: '本金余额',
        dataIndex: 'accountBj',
        width: 100,
        align: 'center'
      },
      {
        title: '佣金金额',
        dataIndex: 'accountYj',
        width: 100,
        align: 'center'
      },
      {
        title: '累计充值',
        dataIndex: 'allRechargeCount',
        width: 100,
        align: 'center'
      },
      {
        title: '推广员ID',
        dataIndex: 'agentId',
        width: 100,
        align: 'center'
      },
      {
        title: '注册时间',
        dataIndex: 'registerTime',
        width: 100,
        align: 'center'
      },
      {
        title: '用户等级',
        dataIndex: 'rank',
        width: 100,
        align: 'center'
      },
      {
        title: '状态',
        width: 100,
        align: 'center',
        render: (text, record) => {
          if (record.enabled == true) {
            return (
              <div style={{ color: "green" }}>正常</div>)
          } else if (record.enabled == false) {
            return (
              <div style={{ color: "red" }}>停用</div>)
          }
        }
      },
      {
        title: '备注',
        dataIndex: 'comment',
        width: 100,
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: '',
        align: 'center',
        width: 100,
        fixed: 'right',
        render: (text, record) => {
          return (
            <div>
              <Icon type="form" title="修改基本信息" style={{ color: "red", marginRight: "15px" }}></Icon>
              <Icon type="transaction" title="交易" style={{ color: "green" }}></Icon>
            </div>
          )
        }
      },
    ];
    return (
      <div className={styles.content}>
        <div className={styles.content_title}>商家管理</div>
        <div className={styles.content_add}>
          <Button type="primary" onClick={this.showModal}>导出</Button>
        </div>
        <div className={styles.content_search}>
          <Input placeholder="商家ID" style={{ width: 100, marginRight: "5px"  }} onChange={this.changeBusinessId}/>
          <Input placeholder="用户名" style={{ width: 100, marginRight: "5px" }} onChange={this.changeBusinessUsername}/>
          <Input placeholder="推广员ID" style={{ width: 100, marginRight: "5px" }}/>
          <Select placeholder="用户等级" style={{ width: 120, marginRight: "5px" }}>
            <Option value="0">新手上路</Option>
            <Option value="1">普通用户</Option>
            <Option value="2">高级用户</Option>
          </Select>
          <Select placeholder="状态" style={{ width: 100, marginRight: "5px" }}>
            <Option value="0">禁用</Option>
            <Option value="1">正常</Option>
          </Select>
          <Select placeholder="排序规则" style={{ width: 150, marginRight: "10px" }}>
            <Option value="0">时间升序</Option>
            <Option value="1">时间降序</Option>
            <Option value="2">本金余额升序</Option>
            <Option value="3">本金余额降序</Option>
            <Option value="4">累计充值升序</Option>
            <Option value="5">累计充值降序</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table size="small"
            rowKey="id" pagination={
              {
                total: this.props.business.total,
                pageSize: 6,
                onChange: this.changePage
              }
            } columns={columns} dataSource={this.props.business.businessData} scroll={{ x: 1200, y: 200 }} bordered />
        </div>
        <Modal
          title="提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Icon type="exclamation" style={{ color: 'orange', fontSize:"30px" }} />
          <span>确认要导出么？</span>
        </Modal>
      </div>
    )
  }
}

export default connect(state => state)(BusinessManege);