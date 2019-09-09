import React from 'react';
import styles from './shop.less';
import { Input, Button, Table, Icon, Modal, Form, Select, notification, DatePicker  } from 'antd';
import { connect } from 'dva';
import dateParse from '@/filter/index';
const { Option } = Select;
const { RangePicker } = DatePicker;
class ShopManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      form: {
        page: 0,
        pageSize: 6,
      },
      visible: false
    })
  }
  componentWillMount(){
    this.props.dispatch({ type:'shop/fetchLoadShop',payload:this.state.form});
  }
  changePage=(page,pageSize)=>{
    this.props.dispatch({ type:"shop/fetchLoadShop",payload:{page:page-1,pageSize:pageSize}});
    this.setState({
      ...this.state.form,
      page:page,
      pageSize:pageSize
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
    (function openNotification() {
      notification.open({
        message: '消息',
        description: '已取消',
        icon: <Icon type="exclamation-circle" style={{ color: 'red', fontSize: "30px" }} />,
      });
    })()
  };
  search = () => {
    this.props.dispatch({ type: 'shop/fetchLoadShop', payload: this.state.form })
  }
  changeShopId = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        businesId: event.target.value
      }
    })
  }
  changeShopPlatform = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        platform: value
      }
    })
  }
  changeShopStatus = (value) => {
    this.setState({
      form: {
        ...this.state.form,
        status: value
      }
    })
  }
  render(){
    const columns = [
      {
        title: '店铺ID',
        width: 100,
        dataIndex: 'id',
        align: 'center',
        fixed: 'left',
      },
      {
        title: '商家ID',
        width: 100,
        dataIndex: 'businesId',
        align: 'center',
      },
      {
        title: '商家手机号',
        dataIndex: 'telephone',
        width: 150,
        align: 'center'
      },
      {
        title: '店铺名称',
        dataIndex: 'name',
        width: 150,
        align: 'center'
      },
      {
        title: '店铺旺旺ID',
        dataIndex: 'wwid',
        width: 100,
        align: 'center'
      },
      {
        title: '所属平台',
        dataIndex: 'platform',
        width: 150,
        align: 'center'
      },
      {
        title: '接单间隔时间',
        dataIndex: 'intervalTime',
        width: 150,
        align: 'center'
      },
      {
        title: '注册时间',
        dataIndex: 'registerTime',
        width: 150,
        align: 'center'
      },
      {
        title: '店铺状态',
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
        title: '操作',
        align: 'center',
        width: 100,
        fixed: 'right',
        render: (text, record) => {
          return (
            <div>
              <Icon type="sync" title="更改店铺状态" style={{ color: "red", marginRight: "15px" }}></Icon>
              <Icon type="copyright" title="版权" style={{ color: "green" }}></Icon>
            </div>
          )
        }
      },
    ];
    return (
      <div className={styles.content}>
        <div className={styles.content_title}>店铺管理</div>
        <div className={styles.content_add}>
          <Button type="primary" onClick={this.showModal}>导出</Button>
        </div>
        <div className={styles.content_search}>
          <RangePicker
            dateRender={current => {
              const style = {};
              if (current.date() === 1) {
                style.border = '1px solid #1890ff';
                style.borderRadius = '50%';
              }
              return (
                <div className="ant-calendar-date" style={style}>
                  {current.date()}
                </div>
              );
            }}
          />
          <Input placeholder="商家ID" style={{ width: 100, marginRight: "5px",marginLeft: "10px" }} onChange={this.changeShopId}/>
          <Select placeholder="所属平台" style={{ width: 120, marginRight: "5px" }} onChange={this.changeShopPlatform}>
            <Option value="天猫">天猫</Option>
          </Select>
          <Select placeholder="店铺状态" style={{ width: 150, marginRight: "5px" }} onChange={this.changeShopStatus}>
            <Option value="0">待审核</Option>
            <Option value="1">审核通过</Option>
            <Option value="2">审核未通过</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table size="small"
            rowKey="id" pagination={
              {
                total: this.props.shop.total,
                pageSize: 6,
                onChange: this.changePage
              }
            } columns={columns} dataSource={this.props.shop.shopData} scroll={{ x: 1200, y: 300 }} bordered />
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

export default connect(state => state)(ShopManage);