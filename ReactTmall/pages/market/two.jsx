import React, { Component } from 'react';
import styles from './market.less';
import { Table } from 'antd';
class two extends Component {
    render() {
        const columns = [
            {
                title: '订单分成比例',
                dataIndex: 'ratio',
                width: 250,
                align: 'center'
            },
            {
                title: '账户余额',
                dataIndex: 'price',
                width: 250,
                align: 'center'
            },
            {
                title: '推广商家数',
                dataIndex: 'allBusinesNum',
                width: 250,
                align: 'center'
            },
            {
                title: '累计分成金额',
                dataIndex: 'totalDeposits',
                width: 250,
                align: 'center'
            },
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>账户信息</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} bordered/>
                </div>
            </div>
        );
    }
}

export default two;