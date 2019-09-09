import React, { Component } from 'react';
import styles from './market.less';
import { Table } from 'antd';
import dateParse from '@/filter/index';
class four extends Component {
    render() {
        const columns = [
            {
                title: '上次登录时间',
                dataIndex: 'lastLoginTime',
                width: 150,
                align: 'center',
                render: (text, record) => {
                    return (
                        <div>
                            {dateParse(text)}
                        </div>
                    )
                }
            },
            {
                title: '状态',
                width: 150,
                align: 'center',
                render: (text, record) => {
                    if (record.enabled == true) {
                        return (
                            <div style={{ color: "green" }}>正常</div>)
                    } else if (record.enabled == false) {
                        return (
                            <div style={{ color: "red" }}>停用</div>)
                    }
                }
            },
            {
                title: '微信',
                dataIndex: 'wxid',
                width: 150,
                align: 'center'
            },
            {
                title: '分成金额',
                dataIndex: 'totalDeposits',
                width: 150,
                align: 'center'
            },
            {
                title: '账户余额',
                dataIndex: 'price',
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
                <div className={styles.content_title}>资金日志</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} bordered />
                </div>
            </div>
        );
    }
}

export default four;