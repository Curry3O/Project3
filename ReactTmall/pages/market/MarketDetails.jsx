import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import styles from './market.less';
import router from 'umi/router';
import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
const { TabPane } = Tabs;
class MarketDetails extends Component {
    toBack = () => {
        router.goBack('./market');
    }
    render() {
        const { date } = this.props.location.state;
        return (
            <div>
                <Button className={styles.btn} type="link" onClick={this.toBack}>返回</Button>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="推广员详情" key="1">
                        <One initData={date}/>
                    </TabPane>
                    <TabPane tab="账户信息" key="2">
                        <Two initData={date}/>
                    </TabPane>
                    <TabPane tab="推广商家" key="3">
                        <Three initData={date}/>
                    </TabPane>
                    <TabPane tab="资金日志" key="4">
                        <Four initData={date}/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default MarketDetails;