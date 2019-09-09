import React, { Component } from 'react';
import styles from './market.less';
import { Table } from 'antd';
import dateParse from '@/filter/index';
class three extends Component {
    render() {
        const columns = [
            {
                title: '推广员ID',
                dataIndex: 'id',
                width: 150,
                align: 'center'
            },
            {
                title: '手机号',
                dataIndex: 'telephone',
                width: 150,
                align: 'center'
            },
            {
                title: 'QQ',
                dataIndex: 'qq',
                width: 150,
                align: 'center'
            },
            {
                title: '累计放单',
                dataIndex: 'allWithdrawCount',
                width: 150,
                align: 'center'
            },
            {
                title: '已完成订单',
                dataIndex: 'accountCommission',
                width: 150,
                align: 'center'
            },
            {
                title: '注册时间',
                dataIndex: 'registerTime',
                width: 150,
                align: 'center',
                render:(text,record)=>{
                    return (
                        <div>
                            {dateParse(text)}
                        </div>
                    )
                }
            },
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>推广商家</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} bordered />
                </div>
            </div>
        );
    }
}

export default three;