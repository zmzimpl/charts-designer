import React from 'react';
import GlobalSetting from './components/GlobalSetting';
import Toolbar from './components/Toolbar';
import Siderbar from './components/Siderbar';
import ItemSetting from './components/ItemSetting';
import DataBinding from './components/DataBinding';
import DesignBoard from './components/DesignBoard';
import styles from './index.less';

const PanelOperate: React.FC<{}> = () => {
  return (
    <div className={styles.operateContainer}>
      <div className={styles.mzToolbar}>
        <Toolbar />
      </div>
      <div className={`${styles.mzSiderbar} fixed`}>
        <Siderbar />
      </div>
      <div className={styles.mzMainContainer}>
        <div className={styles.mzDesignBoard}>
          <DesignBoard />
        </div>
        <div className={styles.mzDesignSetting}>
          <GlobalSetting />
          <ItemSetting />
          <DataBinding />
        </div>
      </div>
    </div>
  );
};

export default PanelOperate;
