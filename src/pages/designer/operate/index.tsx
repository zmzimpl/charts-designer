import React from 'react';
import { Radio } from 'antd';
import { DatabaseOutlined, GlobalOutlined, SettingOutlined } from '@ant-design/icons';
import GlobalSetting from './components/GlobalSetting';
import Header from './components/Header';
import Siderbar from './components/Siderbar';
import ItemSetting from './components/ItemSetting';
import DataBinding from './components/DataBinding';
import DesignBoard from './components/DesignBoard';
import styles from './index.less';

export class PanelOperate extends React.Component {
  state = {
    currentSetting: 'Item',
  };

  setCurrentSetting = (e: any) => {
    this.setState({
      currentSetting: e.target.value,
    });
  };

  render() {
    const { currentSetting } = this.state;
    return (
      <div className={styles.operateContainer}>
        <div className={styles.mzToolbar}>
          <Header />
        </div>
        <div className={`${styles.mzSiderbar} fixed`}>
          <Siderbar />
        </div>
        <div className={styles.mzMainContainer}>
          <div className={styles.mzDesignBoard}>
            <DesignBoard />
          </div>
          <div className={styles.mzDesignSetting}>
            <div className={styles.mzDesignSettingHeader}>
              <Radio.Group
                defaultValue="Item"
                value={currentSetting}
                onChange={this.setCurrentSetting}
                optionType="button"
                buttonStyle="solid"
              >
                <Radio.Button value="Global">
                  <GlobalOutlined /> Global
                </Radio.Button>
                <Radio.Button value="Data">
                  <DatabaseOutlined /> Data
                </Radio.Button>
                <Radio.Button value="Item">
                  <SettingOutlined /> Item
                </Radio.Button>
              </Radio.Group>
            </div>
            <GlobalSetting />
            <ItemSetting />
            <DataBinding />
          </div>
        </div>
      </div>
    );
  }
}

export default PanelOperate;
