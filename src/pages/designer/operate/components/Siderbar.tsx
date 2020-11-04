import React from 'react';

import { AreaChartOutlined, TagsOutlined, BorderOutlined, BlockOutlined } from '@ant-design/icons';
import styles from './Siderbar.less';

export const ComponentType = ['chart', 'unit', 'shape', 'template']

export const WidgetType = [
  {
    type: 'chart',
    name: 'Chart',
    icon: <AreaChartOutlined />
  },
  {
    type: 'unit',
    name: 'Unit',
    icon: <TagsOutlined />
  },
  {
    type: 'shape',
    name: 'Shape',
    icon: <BorderOutlined />
  },
  {
    type: 'template',
    name: 'Template',
    icon: <BlockOutlined />
  }
]

export class Siderbar extends React.Component {
  render() {
    const widgets = WidgetType.map(item => {
      return (
        <div className={styles.mzWidget}>
          <div className={styles.mzWidgetIcon}>{ item.icon }</div>
          <div className={styles.mzWidgetName}>{ item.name }</div>
        </div>
      )
    })
    return (
      <div className={styles.mzSiderbarWrapper}>
        {widgets}
      </div>
    )
  }
}

export default Siderbar;
