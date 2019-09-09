import React, { Component } from 'react';
import styles from './business.less';
import { Table } from 'antd';
class Eight extends Component {
    render() {
        const columns = [
            {
                title: '变动时间',
                dataIndex: 'registerTime',
                width: 150,
                align: 'center'
            },
            {
                title: '变动账户',
                dataIndex: 'bankCard',
                width: 150,
                align: 'center'
            },
            {
                title: '变动金额',
                dataIndex: 'accountCapital',
                width: 150,
                align: 'center'
            },
            {
                title: '账户余额',
                dataIndex: 'freeCheck',
                width: 150,
                align: 'center'
            },
            {
                title: '商家ID',
                dataIndex: 'id',
                width: 150,
                align: 'center'
            },
            {
                title: '订单ID',
                dataIndex: 'agentId',
                width: 150,
                align: 'center'
            },
            {
                title: '备注',
                dataIndex: 'comment',
                width: 150,
                align: 'center'
            },
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>资金日志</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} scroll={{ x: 1200, y: 200 }} bordered />
                </div>
            </div>
        );
    }
}

export default Eight;