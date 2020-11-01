import React from 'react';
import GlobalSetting from './components/GlobalSetting';
import Toolbar from './components/Toolbar';
import SiderBar from './components/Siderbar';
import ItemSetting from './components/ItemSetting';
import DataBinding from './components/DataBinding';
import styles from './index.less';

const PanelOperate: React.FC<{}> = () => {
  return (
    <div className={styles.operateContainer}>
      <Toolbar />
      <SiderBar />
      <GlobalSetting />
      <ItemSetting />
      <DataBinding />
    </div>
  );
};

export default PanelOperate;
