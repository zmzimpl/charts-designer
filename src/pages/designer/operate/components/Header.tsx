import React from 'react';

import { Row, Col } from 'antd';
import { CloseOutlined, SaveOutlined, CopyOutlined } from '@ant-design/icons';
import styles from './Header.less';

export class Header extends React.Component {

  render() {
    return (
      <div className={styles.mzHeaderWrapper}>
        <Row>
          <Col flex="310px">Report Name</Col>
          <Col flex="auto">
            <div className={styles.mzHeaderBtnWrapper}><SaveOutlined /> 保存</div>
            <div className={styles.mzHeaderBtnWrapper}><CopyOutlined /> 另存为</div>
          </Col>
          <Col flex="40px" className={styles.mzCloseBtnWrapper}>
            <CloseOutlined />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
