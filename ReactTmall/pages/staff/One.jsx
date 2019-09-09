import React, { Component } from 'react';
import styles from './staff.less';
import { Descriptions } from 'antd';
import dateParse from '@/filter/index';
class One extends Component {
    render() {
        const date = this.props.initData;
        return (
            <div className={styles.content}>
                <div className={styles.content_content}>
                    <Descriptions className={styles.content_descriptions} title="【基本信息】">
                        <Descriptions.Item label="员工ID">{date.id}</Descriptions.Item>
                        <Descriptions.Item label="用户名">{date.username}</Descriptions.Item>
                        <Descriptions.Item label="真实姓名">{date.realname}</Descriptions.Item>
                        <Descriptions.Item label="手机号">{date.telephone}</Descriptions.Item>
                        <Descriptions.Item label="QQ号">{date.qq}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        );
    }
}

export default One;