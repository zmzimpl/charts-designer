import React from 'react';
import { AreaChartOutlined, TagsOutlined, BorderOutlined, BlockOutlined } from '@ant-design/icons';
import { PubSub } from '@/core/pubsub/pubsub';
import { DesignTopics } from '@/core/pubsub/Topics';
import { MzSafeAny } from '@/models/basic/custom-type';
import styles from './Siderbar.less';

export const ComponentType = ['chart', 'unit', 'shape', 'template'];

export interface Widget {
  type: string;
  name: string;
  icon: MzSafeAny;
}

export const WidgetType = [
  {
    type: 'Chart',
    name: 'Chart',
    icon: <AreaChartOutlined />
  },
  {
    type: 'Unit',
    name: 'Unit',
    icon: <TagsOutlined />
  },
  {
    type: 'Shape',
    name: 'Shape',
    icon: <BorderOutlined />
  },
  {
    type: 'Template',
    name: 'Template',
    icon: <BlockOutlined />
  }
]

export class Siderbar extends React.Component {

  publishWidgetClick(widget: Widget) {
    PubSub.publish(DesignTopics.widgetDrawerVisible, { widget });
  }

  render() {
    const widgets = WidgetType.map((item, index) => {
      return (
        <div className={styles.mzWidget} key={item.type + index} onClick={() => this.publishWidgetClick(item)}>
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
