import React from 'react';

import { Drawer, Button } from 'antd';

import styles from './DesignBoard.less';

class DesignBoard extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div style={{ width: this.state.visible ? 'calc(100% - 256px)' : '100%', float: 'right' }}>
        <div className={styles.mzDesignBoardToolbar}>Toolbar</div>
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          mask={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

export default DesignBoard;
