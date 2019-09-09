import React, { Component } from 'react';
import styles from './business.less';
import { Table } from 'antd';
import dateParse from '@/filter/index';
class Three extends Component {
    render() {
        const columns = [
            {
                title: '订单ID',
                dataIndex: 'id',
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
                title: '任务类型',
                dataIndex: 'promoter',
                width: 150,
                align: 'center'
            },
            {
                title: '用户名称',
                dataIndex: 'username',
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
                title: '买手付款',
                dataIndex: 'price',
                width: 150,
                align: 'center'
            },
            {
                title: '商家返款',
                dataIndex: 'bankcode',
                width: 150,
                align: 'center'
            },
            {
                title: '电商订单号',
                dataIndex: 'businesId',
                width: 150,
                align: 'center'
            },
            {
                title: '订单状态',
                dataIndex: 'status',
                width: 150,
                align: 'center'
            },
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>进行中订单</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} scroll={{ x: 1200, y: 200 }} bordered />
                </div>
            </div>
        );
    }
}

export default Three;