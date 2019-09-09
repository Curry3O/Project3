import React, { Component } from 'react';
import styles from './business.less';
import { Descriptions } from 'antd';
import dateParse from '@/filter/index';
class One extends Component {
    render() {
        const date = this.props.initData;
        return (
            <div className={styles.content}>
                <div className={styles.content_content}>
                    <Descriptions className={styles.content_descriptions} title="【基本信息】">
                        <Descriptions.Item label="商家ID">{date.id}</Descriptions.Item>
                        <Descriptions.Item label="用户名">{date.username}</Descriptions.Item>
                        <Descriptions.Item label="来源">{date.domain}</Descriptions.Item>
                        <Descriptions.Item label="注册时间">{dateParse(date.registerTime)}</Descriptions.Item>
                        <Descriptions.Item label="手机号">{date.telephone}</Descriptions.Item>
                        <Descriptions.Item label="QQ">{date.qq}</Descriptions.Item>
                        <Descriptions.Item label="备注">{date.comment}</Descriptions.Item>
                        <Descriptions.Item label="状态">{date.status}</Descriptions.Item>
                        <Descriptions.Item label="用户等级">{date.rank}</Descriptions.Item>
                    </Descriptions>
                </div>
                <div className={styles.content_content}>
                    <Descriptions className={styles.content_descriptions} title="【账号信息】">
                        <Descriptions.Item label="本金余额">￥{date.accountBj}</Descriptions.Item>
                        <Descriptions.Item label="佣金余额">{date.accountYj}</Descriptions.Item>
                        <Descriptions.Item label="累计充值">{date.allRechargeCount}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        );
    }
}

export default One;