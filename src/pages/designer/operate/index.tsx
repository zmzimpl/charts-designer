import React from 'react';
import GlobalSetting from './components/GlobalSetting';
import Header from './components/Header';
import Siderbar from './components/Siderbar';
import ItemSetting from './components/ItemSetting';
import DataBinding from './components/DataBinding';
import DesignBoard from './components/DesignBoard';
import styles from './index.less';

const PanelOperate: React.FC<{}> = () => {
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
          <div className={styles.mzDesignSettingHeader} />
          <GlobalSetting />
          <ItemSetting />
          <DataBinding />
        </div>
      </div>
    </div>
  );
};

export default PanelOperate;
