import React, { Component } from 'react';
import styles from './business.less';
import { Table } from 'antd';
class Five extends Component {
    render() {
        const columns = [
            {
                title: '订单ID',
                dataIndex: 'id',
                width: 150,
                align: 'center'
            },
            {
                title: '任务ID',
                dataIndex: 'sifuId',
                width: 150,
                align: 'center'
            },
            {
                title: '商品名称',
                dataIndex: 'name',
                width: 150,
                align: 'center'
            },
            {
                title: '接单时间',
                dataIndex: 'commitTime',
                width: 150,
                align: 'center'
            },
            {
                title: '接单账号',
                dataIndex: 'bankCard',
                width: 150,
                align: 'center'
            },
            {
                title: '商家押金',
                dataIndex: 'accountYj',
                width: 150,
                align: 'center'
            },
            {
                title: '撤销时间',
                dataIndex: 'lastLoginTime',
                width: 150,
                align: 'center'
            },
            {
                title: '撤销原因',
                dataIndex: 'reason',
                width: 150,
                align: 'center'
            },
            {
                title: '撤销人',
                dataIndex: 'username',
                width: 150,
                align: 'center'
            }
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>已撤销订单</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} scroll={{ x: 1200, y: 200 }} bordered />
                </div>
            </div>
        );
    }
}

export default Five;