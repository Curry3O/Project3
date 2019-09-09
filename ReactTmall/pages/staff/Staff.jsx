import React from 'react';
import styles from './staff.less'
import router from 'umi/router'
import {connect} from 'dva'
import { Input,Select,Button,Table,Icon } from 'antd';
const { Option } = Select;
class Staff extends React.Component {
 constructor(props){
 		super(props)
 		this.state={
			form:{
				page:0,
				pageSize:6
			}
 		}
 	}
 	// 跳转到用户日志页面
	toLogs=(record)=>{
    	this.props.history.push({
			pathname: './staff/logDetails',
      		state: {
        		date: record
      		}
    	})
  	}
 	// 改变状态的时候
 	changeStatus=(record)=>{
		if(record.enabled == true){
 		this.props.dispatch({type:'staff/fetchChangeStatus',payload:{page:this.state.form,forms:{id:record.id,enabled:false}}})
			
		}else if(record.enabled == false){
 		this.props.dispatch({type:'staff/fetchChangeStatus',payload:{page:this.state.form,forms:{id:record.id,enabled:true}}})

		}
 	}
 	// 搜索
 	search=()=>{
 		this.props.dispatch({type:'staff/fetchLoadStaff',payload:this.state.form})
 	}
 	// 改变输入框的时候
 	changeStaffId=(event)=>{
		// console.log(event.target.value)
		this.setState({
			form:{
				...this.state.form,
				id:event.target.value
			}
		})
 	}
 	// 改变下拉框
 	handleChange=(value)=>{
	  this.setState({
			form:{
				...this.state.form,
				enabled:value
			}
		})
	}
 	// 组件将要加载的时候
 	componentWillMount(){
 		this.props.dispatch({type:'staff/fetchLoadStaff',payload:this.state.form})
 	}
 	
	//页面改变的时候 
	changePage=(page, pageSize)=>{
		this.props.dispatch({type:'staff/fetchLoadStaff',payload:{page:page-1,pageSize:6}})
		this.setState({
			form:{
				...this.state.form,
				page:page-1
			}
		})
	}
  render(){
  	const columns = [
	  {
	    title: '员工ID',
	    dataIndex: 'id',
	    align:'center',
	  },
	  {
	    title: '所属分站',
	    align:'center',
	    dataIndex: 'siteId',
	  },
	  {
	    title: '用户名',
	    align:'center',
	    dataIndex: 'username',
	  },
	  {
	    title: '真实姓名',
	    align:'center',
	    dataIndex: 'realname',
	  },
	  {
	    title: '手机号',
	    align:'center',
	    dataIndex: 'telephone',
	  },
	  {
	    title: 'QQ号',
	    align:'center',
	    dataIndex: 'qq',
	  },
	  {
	    title: '上次登陆时间',
	    align:'center',
	    dataIndex: 'lastLoginTime',
	  },
	  {
	    title: '上次登录IP',
	    align:'center',
	    dataIndex: 'lastLoginIp',
	  },
	  {
	    title: '状态',
	    align:'center',
	    // dataIndex: 'enabled',
	    render:(text,record)=>{
	    	if(record.enabled == true){
				return (
					<div>正常</div>)
	    	}else if(record.enabled == false){
				return(
					<div>禁用</div>)
	    	}
	    }
	  },
	  {
	    title: '操作',
	    align:'center',
	    dataIndex: '',
	    render:(text,record)=>{
	    	if(record.enabled == true){
	    		return (
	    		<div>
	    			<Icon type="check-circle" title="禁用" style={{color:"green",marginRight:"5px"}} onClick={this.changeStatus.bind(this,record)} />
	    			<Icon type="file-text" title="查看日志" onClick={this.toLogs.bind(this,record)} />
	    		</div>
	    		)
	    	}else if(record.enabled == false){
	    		return (
	    		<div>
	    			<Icon type="stop" title="启用" style={{color:"red",marginRight:"5px"}} onClick={this.changeStatus.bind(this,record)}  />
	    			<Icon type="file-text" title="查看日志" onClick={this.toLogs.bind(this,record)} />
	    		</div>
	    		)
	    	}
	    }
	  },
	];
    return (
      <div className={styles.content}>
      	<div className={styles.content_title}>员工管理</div>
      	<div className={styles.content_search}>
			<Input placeholder="员工ID" onChange={this.changeStaffId} />
			<Input placeholder="用户名" />
			<Input placeholder="手机号" />
			<Select placeholder="状态" style={{ width: 150 }} onChange={this.handleChange}>
		      <Option value="0">禁用</Option>
		      <Option value="1">正常</Option>
		    </Select>
		    <Button type="primary" onClick={this.search}>搜索</Button>
      	</div>
      	<div className={styles.content_content}>
			<Table size="small"
			rowKey="id" pagination={
				{
				total:this.props.staff.total,
				pageSize:6,
				onChange:this.changePage
			}
		} columns={columns} dataSource={this.props.staff.staffData} bordered />
      	</div>
        
      </div>
    )
  }
}

export default connect(state=>state)(Staff);