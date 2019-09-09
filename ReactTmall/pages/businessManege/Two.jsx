import React, { Component } from 'react';
import styles from './business.less';
import { Table } from 'antd';
class Two extends Component {
    render() {
        const columns = [
            {
                title: '订单ID',
                dataIndex: 'businesSifuId',
                width: 150,
                align: 'center'
            },
            {
                title: '任务ID',
                dataIndex: 'managerId',
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
                title: '任务类型',
                dataIndex: 'promoter',
                width: 150,
                align: 'center'
            },
            {
                title: '商家押金',
                dataIndex: 'accountBj',
                width: 150,
                align: 'center'
            },
            {
                title: '商家支付佣金',
                dataIndex: 'accountYj',
                width: 150,
                align: 'center'
            }
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>待接订单</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} bordered />
                </div>
            </div>
        );
    }
}

export default Two;