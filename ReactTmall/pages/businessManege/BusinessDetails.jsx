import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import styles from './business.less';
import router from 'umi/router';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
const { TabPane } = Tabs;
class BusinessDetails extends Component {
    toBack = () => {
        router.goBack('./businessManege');
    }
    render() {
        const { date } = this.props.location.state;
        return (
            <div>
                <Button className={styles.btn} type="link" onClick={this.toBack}>返回</Button>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="商家详情" key="1">
                        <One initData={date} />
                    </TabPane>
                    <TabPane tab="待接订单" key="2">
                        <Two initData={date} />
                    </TabPane>
                    <TabPane tab="进行中订单" key="3">
                        <Three initData={date} />
                    </TabPane>
                    <TabPane tab="已完成订单" key="4">
                        <Four initData={date} />
                    </TabPane>
                    <TabPane tab="已撤销订单" key="5">
                        <Five initData={date} />
                    </TabPane>
                    <TabPane tab="绑定店铺" key="6">
                        <Six initData={date} />
                    </TabPane>
                    <TabPane tab="充值记录" key="7">
                        <Seven initData={date} />
                    </TabPane>
                    <TabPane tab="资金日志" key="8">
                        <Eight initData={date} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default BusinessDetails;