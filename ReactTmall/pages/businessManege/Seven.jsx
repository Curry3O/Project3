import React, { Component } from 'react';
import styles from './business.less';
import { Table } from 'antd';
class Seven extends Component {
    render() {
        const columns = [
            {
                title: '充值ID',
                dataIndex: 'id',
                width: 150,
                align: 'center'
            },
            {
                title: '充值金额',
                dataIndex: 'price',
                width: 150,
                align: 'center'
            },
            {
                title: '充值时间',
                dataIndex: 'checkTime',
                width: 150,
                align: 'center'
            },
            {
                title: '收款银行',
                dataIndex: 'bank',
                width: 150,
                align: 'center'
            },
            {
                title: '审核时间',
                dataIndex: 'commitTime',
                width: 150,
                align: 'center'
            },
            {
                title: '备注',
                dataIndex: 'comment',
                width: 150,
                align: 'center'
            }
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>充值记录</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} scroll={{ x: 1200, y: 200 }} bordered />
                </div>
            </div>
        );
    }
}

export default Seven;