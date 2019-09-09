import React from 'react';
import styles from './newsCenter.less';
import { Input, Button, Table, Select, Icon, Modal } from 'antd';
import { connect } from 'dva';
import dateParse from '@/filter/index';
import NewsForm from './newsForm';
const { Option } = Select;
class NewsCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      putForm:{},
      form: {
        page: 0,
        pageSize: 6,
        siteId: 2,
        visible: false,
      }
    })
  }
  changePage = (page,pageSize)=>{
    this.props.dispatch({ type:"newsCenter/fetchLoadNews",payload:{page:page-1,pageSize:pageSize,siteId: 2}});
    this.setState({
      ...this.state.form,
      page:page,
      pageSize:pageSize
    })
  }
  toDelete=(record)=>{
    this.props.dispatch({type:'newsCenter/fetchDeleteNews',payload:{page:this.state.form,forms:{id:record.id}}})
  }
  changeStatus=(record)=>{
		if(record.status == "已发布"){
 		  this.props.dispatch({type:'newsCenter/fetchChangeStatus',payload:{page:this.state.form,forms:{id:record.id,status:"未发布"}}})
		}else if(record.status == "未发布"){
 		  this.props.dispatch({type:'newsCenter/fetchChangeStatus',payload:{page:this.state.form,forms:{id:record.id,status:"已发布"}}})

		}
 	}
  getForm=(form)=>{
    this.newsForm=form;
  }
  componentWillMount(){
 		this.props.dispatch({type:'newsCenter/fetchLoadNews',payload:this.state.form})
   }
  showModal = () => {
    this.setState({
      visible: true,
      putForm: {}
    });
  };
  toEdit=(record)=>{
    var two = record.receiver.split(',');
    record.receiver = two;
    this.setState({
      visible: true,
      putForm: record,
    });
  }
  search=()=>{
    this.props.dispatch({ type:'newsCenter/fetchLoadNews',payload:this.state.form})
   }
  changeStaffTitle=(event)=>{
    this.setState({
      form:{
				...this.state.form,
				title:event.target.value
			}
    })
  }
  statusChange=(value)=>{
    this.setState({
			form:{
				...this.state.form,
        status:value
			}
		})
  }
  noticeChange=(value)=>{
    this.setState({
			form:{
				...this.state.form,
        receiver:value
			}
		})
  }
  handleOk = e => {
    e.preventDefault();
    this.newsForm.validateFields((err, values) => {
      if (!err) {
        var one = values.receiver.toString();
        values.receiver = one;
        values.siteId = 2
        this.props.dispatch({ type: 'newsCenter/fetchAddNews', payload: { forms: values, page: this.state.form}})
      }
    });
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render(){
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        align: 'center',
      },
      {
        title: '状态',
        align: 'center',
        dataIndex: 'status',
      },
      {
        title: '通知人群',
        align: 'center',
        dataIndex: 'receiver',
      },
      {
        title: '创建时间',
        align: 'center',
        dataIndex: 'createTime',
        render: (text, record) => {
          return (
            <div>
              {dateParse(text)}
            </div>
          );
        }
      },
      {
        title: '发布时间',
        align: 'center',
        dataIndex: 'publishTime',
        render: (text, record) => {
          return (
            <div>
              {dateParse(text)}
            </div>
          );
        }
      },
      {
        title: '操作',
        align: 'center',
        dataIndex: 'actionTime',
        render: (text, record) => {
          if (record.status==="已发布") {
            return (
              <div>
                <Icon type="edit" title="编辑" style={{ color: "red", marginRight: "5px" }} onClick={this.toEdit.bind(this,record)}></Icon>
                <Icon type="close-circle" title="取消发布" style={{ color: "red", marginRight: "5px" }} onClick={this.changeStatus.bind(this,record)}></Icon>
                <Icon type="delete" title="删除" style={{ color: "red", marginRight: "5px" }} onClick={this.toDelete.bind(this,record)}></Icon>
              </div>
            );
          }else{
            return (
              <div>
                <Icon type="edit" title="编辑" style={{color:"red",marginRight:"5px"}} onClick={this.toEdit.bind(this,record)}></Icon>
                <Icon type="check-circle" title="发布" style={{color:"green",marginRight:"5px"}} onClick={this.changeStatus.bind(this, record)}></Icon>
                <Icon type="delete" title="删除" style={{color:"red",marginRight:"5px"}} onClick={this.toDelete.bind(this,record)}></Icon>
              </div>
            );
          }
        }
      }
    ];
    return (
      <div className={styles.content}>
        <div className={styles.content_title}>消息管理</div>
        <div className={styles.content_add}>
          <Button type="primary" onClick={this.showModal}>新增</Button>
          <Modal
            title="消息"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <NewsForm ref={this.getForm} initData={this.state.putForm}/>
          </Modal>
        </div>
        <div className={styles.content_search}>
          <Input placeholder="标题公告" onChange={this.changeStaffTitle}/>
          <Select placeholder="状态" style={{ width: 150 }} onChange={this.statusChange}>
            <Option value="未发布">未发布</Option>
            <Option value="已发布">已发布</Option>
          </Select>
          <Select placeholder="通知人群" style={{ width: 150 }} onChange={this.noticeChange}>
            <Option value="推广员">推广员</Option>
            <Option value="商家">商家</Option>
          </Select>
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table size="small"
            rowKey="id" pagination={
              {
                total: this.props.newsCenter.total,
                pageSize: 6,
                onChange: this.changePage
              }
            } columns={columns} dataSource={this.props.newsCenter.newsData} bordered />
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(NewsCenter);