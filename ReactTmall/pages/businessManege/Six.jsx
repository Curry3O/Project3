import React, { Component } from 'react';
import styles from './business.less';
import { Table } from 'antd';
class Six extends Component {
    render() {
        const columns = [
            {
                title: '所属平台',
                dataIndex: 'privilege',
                width: 150,
                align: 'center'
            },
            {
                title: '店铺名称',
                dataIndex: 'name',
                width: 150,
                align: 'center'
            },
            {
                title: '旺旺ID',
                dataIndex: 'id',
                width: 150,
                align: 'center'
            },
            {
                title: '店铺网址',
                dataIndex: 'domain',
                width: 150,
                align: 'center'
            },
            {
                title: '绑定时间',
                dataIndex: 'commitTime',
                width: 150,
                align: 'center'
            },
            {
                title: '店铺审核状态',
                dataIndex: 'status',
                width: 150,
                align: 'center'
            }
        ];
        const data = this.props.initData;
        const arr = [];
        arr.push(data);
        return (
            <div className={styles.content}>
                <div className={styles.content_title}>绑定店铺</div>
                <div className={styles.content_content}>
                    <Table columns={columns} dataSource={arr} scroll={{ x: 1200, y: 200 }} bordered />
                </div>
            </div>
        );
    }
}

export default Six;