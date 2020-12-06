import React from 'react';
import { Radio } from 'antd';
import { DatabaseOutlined, GoldOutlined, SettingOutlined } from '@ant-design/icons';
import GlobalSetting from './components/GlobalSetting';
import ItemSetting from './components/ItemSetting';
import DataBinding from './components/DataBinding';
import DesignBoard from './components/DesignBoard';
import Header from './components/Header';
import Siderbar from './components/Siderbar';
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
    let setting;
    if (currentSetting === 'Global') {
      setting = <GlobalSetting />;
    } else if (currentSetting === 'Data') {
      setting = <DataBinding />;
    } else if (currentSetting === 'Item') {
      setting = <ItemSetting />;
    }
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
              >
                <Radio.Button value="Global" >
                  <GoldOutlined title="全局配置" /> { currentSetting === 'Global' ? '全局配置' : '' }
                </Radio.Button>
                <Radio.Button value="Data">
                  <DatabaseOutlined title="数据绑定" /> { currentSetting === 'Data' ? '数据绑定' : '' }
                </Radio.Button>
                <Radio.Button value="Item">
                  <SettingOutlined title="属性设置" /> { currentSetting === 'Item' ? '属性设置' : '' }
                </Radio.Button>
              </Radio.Group>
            </div>
            { setting }
          </div>
        </div>
      </div>
    );
  }
}

export default PanelOperate;
