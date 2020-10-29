import React from 'react';

import styles from './DesignerLayout.less';

const DesignerLayout: React.FC<{}> = (props) => {
  return <div className={styles.designerContainer}>{props.children}</div>;
};

export default DesignerLayout;
