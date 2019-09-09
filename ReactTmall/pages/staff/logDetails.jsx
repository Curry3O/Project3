import React from 'react';
import { Tabs, Button } from 'antd';
import styles from './staff.less';
import router from 'umi/router';
import One from './One';
const { TabPane } = Tabs;
class LogDetails extends React.Component {
	toBack = () => {
		router.goBack('./Staff');
	}
	render(){
		const { date } = this.props.location.state;
		return(
			<div>
				<Button className={styles.btn} type="link" onClick={this.toBack}>返回</Button>
				<Tabs defaultActiveKey="1">
					<TabPane tab="员工详情" key="1">
						<One initData={date} />
					</TabPane>
				</Tabs>
			</div>
		)
	}
}
export default LogDetails