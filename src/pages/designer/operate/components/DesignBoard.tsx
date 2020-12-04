import React from 'react';

import { Drawer } from 'antd';
import { PubSub } from '@/core/pubsub/pubsub';
import { DesignTopics } from '@/core/pubsub/Topics';
import {  DoubleLeftOutlined } from '@ant-design/icons';
import GridCanvas from '../../grid-canvas/GridCanvas';
import styles from './DesignBoard.less';
import { WidgetGeneralOptions, WidgetGeneralMap } from '@/models/report/insight-widget';

class DesignBoard extends React.Component {

  widgetGeneralOptions = WidgetGeneralOptions;

  widgetGeneralMap = WidgetGeneralMap;

  constructor(props: any) {
    super(props);
    PubSub.subscribe(DesignTopics.widgetDrawerVisible, (data) => {
      if (!this.state.visible) {
        this.setState({
          visible: true,
          widget: data.widget
        })
      } else if (data.widget.type === this.state.widget.type) {
          this.setState({ visible: false});
        } else {
          this.setState({
            widget: data.widget
          });
        }
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(DesignTopics.widgetDrawerVisible);
  }

  state = { 
    visible: false,
    widget: {
      type: 'chart',
      name: 'Chart'
    }
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  closeDrawer = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const drawerTitle = (
      <div>
        Choose a {this.state.widget.name} 
        <DoubleLeftOutlined className={`${styles.mzDesignBoardMenu  } pointer`} onClick={this.closeDrawer} />
      </div>
     );
     this.widgetGeneralOptions.get(this.state.widget.name)?.forEach(item => {
       console.log(item);
       console.log(this.widgetGeneralMap.get(item));
     });
    return (
      <div className={styles.mzDesignBoard} style={{ width: this.state.visible ? 'calc(100% - 256px)' : '100%' }}>
        <div className={styles.mzDesignBoardToolbar}>Toolbar</div>
        <div className={styles.mzDesignBoardArea}>
          <GridCanvas />
        </div>
        <Drawer
          title={drawerTitle}
          placement="left"
          closable={false}
          mask={false}
          onClose={this.closeDrawer}
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
