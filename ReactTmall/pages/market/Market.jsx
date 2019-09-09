import React from 'react';
import styles from './market.less';
import { Input, Button, Table, Icon, Modal, Form, notification } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import dateParse from '@/filter/index';
import MarketForm from './marketForm';
const { TextArea } = Input;
class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      putForm: {},
      form: {
        page: 0,
        pageSize: 6,
        siteId: 2,
      },
      visible1: false,
      visible2: false,
    })
  }
  toDetails=(record)=>{
    // router.push('./market/marketDetails');
    this.props.history.push({
      pathname: './market/marketDetails',
      state: {
        date: record
      }
    })
  }
  search = () => {
    this.props.dispatch({ type: 'market/fetchLoadMarket', payload: this.state.form })
  }
  changeMarketId = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        id: event.target.value
      }
    })
  }
  changeMarketTelephone = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        telephone: event.target.value
      }
    })
  }
  changeMarketUsername = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        username: event.target.value
      }
    })
  }
  changeMarketQq = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        qq: event.target.value
      }
    })
  }
  changeMarketWxid = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        wxid: event.target.value
      }
    })
  }
  getForm=(form)=>{
    this.marketForm=form;
  }
  showModal = () => {
    this.setState({
      visible1: true,
      putForm:{}
    });
  }
  showModal2 = () => {
    this.setState({
      visible2: true
    });
  }
  handleOk = e => {
    e.preventDefault();
    this.marketForm.validateFields((err, values) => {
      if (!err) {
        values.siteId = 2
        this.props.dispatch({ type: 'market/fetchAddMarket', payload: { forms: values, page: this.state.form } })
      }
    });
    this.setState({
      visible1: false,
    });
  };
  handleCancel = e => {
    this.setState({
      visible1: false,
    });
  };
  exportOk = () => {
    this.setState({
      visible2: false,
    });
    (function openNotification() {
      notification.open({
        message: '成功',
        description: '正在下载...',
        icon: <Icon type="check-circle" style={{ color: 'green', fontSize: "30px" }} />,
      });
    })()
  };
  exportCancel = () => {
    this.setState({
      visible2: false,
    });
    (function openNotification() {
      notification.open({
        message: '消息',
        description: '已取消',
        icon: <Icon type="exclamation-circle" style={{ color: 'red', fontSize: "30px" }} />,
      });
    })()
  };
  toEdit = (record) => {
    this.setState({
      visible1: true,
      putForm: record,
    });
  }
  componentWillMount(){
    this.props.dispatch({type:'market/fetchLoadMarket',payload:this.state.form});
  }
  changePage = (page,pageSize)=>{
    this.props.dispatch({ type:"market/fetchLoadMarket",payload:{page:page-1,pageSize:pageSize,siteId: 2}});
    this.setState({
      ...this.state.form,
      page:page,
      pageSize:pageSize
    })
  }
  render(){
    const columns = [
      {
        title: '推广员ID',
        width: 100,
        dataIndex: 'id',
        fixed: 'left',
        align: 'center',
        render:(text,record)=><a onClick={this.toDetails.bind(this,record)}>{text}</a>,
      },
      {
        title: '用户名',
        width: 100,
        dataIndex: 'username',
        align: 'center'
      },
      {
        title: '手机号',
        dataIndex: 'telephone',
        width: 150,
        align: 'center'
      },
      {
        title: 'QQ',
        dataIndex: 'qq',
        width: 150,
        align: 'center'
      },
      {
        title: '微信',
        dataIndex: 'wxid',
        width: 150,
        align: 'center'
      },
      {
        title: '推广商家数',
        dataIndex: 'allBusinesNum',
        width: 150,
        align: 'center'
      },
      {
        title: '账户余额',
        dataIndex: 'price',
        width: 100,
        align: 'center'
      },
      {
        title: '累计分成金额',
        dataIndex: 'totalDeposits',
        width: 150,
        align: 'center'
      },
      {
        title: '订单分成比例',
        dataIndex: 'ratio',
        width: 200,
        align: 'center'
      },
      {
        title: '上次在线时间',
        dataIndex: 'lastLoginTime',
        width: 200,
        align: 'center'
      },
      {
        title: '状态',
        width: 100,
        align: 'center',
        render: (text, record) => {
          if (record.enabled == true) {
            return (
              <div>正常</div>)
          } else if (record.enabled == false) {
            return (
              <div>禁用</div>)
          }
        }
      },
      {
        title: '备注',
        dataIndex: 'comment',
        width: 150,
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: '',
        fixed: 'right',
        align: 'center',
        width: 100,
        render: (text,record)=>{
          return (
            <div>
              <Icon type="form" title="修改基本信息" style={{ color: "red", marginRight: "15px" }} onClick={this.toEdit.bind(this, record)}></Icon>
              <Icon type="dollar" title="结算" style={{ color: "green" }}></Icon>
            </div>
          )
        }
      },
    ];
    return (
      <div className={styles.content}>
        <div className={styles.content_title}>推广管理</div>
        <div className={styles.content_add}>
          <Button type="primary" style={{marginRight:"10px"}} onClick={this.showModal}>新增</Button>
          <Button type="primary" onClick={this.showModal2}>导出</Button>
        </div>
        <div className={styles.content_search}>
          <Input placeholder="推广员ID" onChange={this.changeMarketId}/>
          <Input placeholder="手机号" onChange={this.changeMarketTelephone}/>
          <Input placeholder="用户名" onChange={this.changeMarketUsername}/>
          <Input placeholder="QQ" onChange={this.changeMarketQq}/>
          <Input placeholder="微信" onChange={this.changeMarketWxid}/>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table size="small"
            rowKey="id" pagination={
              {
                total: this.props.market.total,
                pageSize: 6,
                onChange: this.changePage
              }
            } columns={columns} dataSource={this.props.market.marketData} scroll={{ x: 1500, y: 300 }} bordered/>
        </div>
        <Modal title="新增推广员信息" visible={this.state.visible1} onOk={this.handleOk} onCancel={this.handleCancel} okText="确定" cancelText="取消">
          <MarketForm ref={this.getForm} initData={this.state.putForm}/>
        </Modal>
        <Modal
          title="提示"
          visible={this.state.visible2}
          onOk={this.exportOk}
          onCancel={this.exportCancel}
        >
          <Icon type="exclamation" style={{ color: 'orange', fontSize:"30px" }} />
          <span>确认要导出么？</span>
        </Modal>
      </div>
    )
  }
}
export default connect(state => state)(Market);