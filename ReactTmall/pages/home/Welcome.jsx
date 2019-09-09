import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './welcome.less';
import Echart from './echart';
function IndexPage() {
  return (
    <div className={styles.content}>
      <div className={styles.tab}>
        <div className={styles.tab_bar1}>
          <p>今日放单商家数：387家</p>
          <p>今日注册商家数：66家</p>
          <p>总注册商家数：865家</p>
        </div>
        <div className={styles.tab_bar2}>
          <p>今日放单量：5670单</p>
          <p>进行中刷单：3892单</p>
          <p>待接订单量：489单</p>
        </div>
        <div className={styles.tab_bar3}>
          <p>总注册推广员：1250人</p>
          <p>总推广订单：45986单</p>
          <p>总推广分成：58</p>
        </div>
        <div className={styles.tab_bar4}>
          <p>今日收入：386万元</p>
          <p>待结算收入：228万元</p>
          <p>累计结算收入：3582万元</p>
        </div>
      </div>
      <Echart data={{
        xdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        ydata: {
          ydata1: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          ydata2: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        }
      }} />
    </div>
  );
}
IndexPage.propTypes = {};
export default connect()(IndexPage);
