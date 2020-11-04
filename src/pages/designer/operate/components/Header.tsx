import React from 'react';

import { Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styles from './Header.less';

export class Header extends React.Component {

  render() {
    return (
      <div className={styles.mzHeaderWrapper}>
        <Row>
          <Col flex="310px">Report Name</Col>
          <Col flex="auto">Operation Btn</Col>
          <Col flex="40px" className={styles.mzCloseBtnWrapper}>
            <CloseOutlined />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
