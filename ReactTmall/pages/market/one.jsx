import React, { Component } from 'react';
import styles from './market.less';
import { Descriptions } from 'antd';
import dateParse from '@/filter/index';
class one extends Component {
    render() {
        const date = this.props.initData;
        return (
            <div className={styles.content}>
                <div className={styles.content_content}>
                    <Descriptions className={styles.content_descriptions} title="【基本信息】">
                        <Descriptions.Item label="推广员ID">{date.id}</Descriptions.Item>
                        <Descriptions.Item label="用户名">{date.username}</Descriptions.Item>
                        <Descriptions.Item label="QQ">{date.qq}</Descriptions.Item>
                        <Descriptions.Item label="手机号">{date.telephone}</Descriptions.Item>
                        <Descriptions.Item label="微信号">{date.wxid}</Descriptions.Item>
                        <Descriptions.Item label="注册时间">{dateParse(date.registerTime)}</Descriptions.Item>
                        <Descriptions.Item label="上次登录时间">{dateParse(date.lastLoginTime)}</Descriptions.Item>
                        <Descriptions.Item label="状态">{date.status}</Descriptions.Item>
                        <Descriptions.Item label="备注">{date.comment}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        );
    }
}

export default one;