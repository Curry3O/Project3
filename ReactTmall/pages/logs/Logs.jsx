import React from 'react';
import styles from './logs.less';
import {Input,Button,Table} from 'antd';
import {connect} from 'dva';
import dateParse from '@/filter/index';
class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      form:{
        page:0,
        pageSize:6
      }
    })
  }
  search = () => {
    this.props.dispatch({ type: 'logs/fetchLoadLogs', payload: this.state.form })
  }
  changeLogsId = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        id: event.target.value
      }
    })
  }
  changePage=(page,pageSize)=>{
    this.props.dispatch({ type:"logs/fetchLoadLogs",payload:{page:page-1,pageSize:pageSize}});
    this.setState({
      ...this.state.form,
      page:page,
      pageSize:pageSize
    })
  }
  componentWillMount() {
    this.props.dispatch({ type:"logs/fetchLoadLogs",payload:this.state.form})
  }
  render(){
    const columns = [
	  {
	    title: '日志ID',
	    dataIndex: 'id',
	    align:'center',
	  },
	  {
	    title: '操作者ID',
	    align:'center',
	    dataIndex: 'userId',
	  },
	  {
	    title: '内容',
	    align:'center',
	    dataIndex: 'actionContent',
	  },
	  {
	    title: '操作时间',
	    align:'center',
      dataIndex: 'actionTime',
      render:(text,record)=>{
        return (
          <div>
            {dateParse(text)}
          </div>
        );
      }
	  }];
    return (
      <div className={styles.content}>
        <div className={styles.content_title}>日志管理</div>
        <div className={styles.content_search}>
          <Input placeholder="日志ID" onChange={this.changeLogsId} />
          <Button type="primary" onClick={this.search}>搜索</Button>
        </div>
        <div className={styles.content_content}>
          <Table size="small"
            rowKey="id" pagination={
              {
                total: this.props.logs.total,
                pageSize: 6,
                onChange: this.changePage
              }
            } columns={columns} dataSource={this.props.logs.logsData} bordered />
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(Logs);