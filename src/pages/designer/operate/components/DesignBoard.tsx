import React from 'react';

import { Drawer, Collapse } from 'antd';
import { PubSub } from '@/core/pubsub/pubsub';
import { DesignTopics } from '@/core/pubsub/Topics';
import {  DoubleLeftOutlined } from '@ant-design/icons';
import GridCanvas from '../../grid-canvas/GridCanvas';
import { WidgetGeneralOptions, WidgetGeneralMap } from '@/models/report/insight-widget';
import styles from './DesignBoard.less';

const { Panel } = Collapse;
class DesignBoard extends React.Component {

  widgetGeneralOptions = WidgetGeneralOptions;

  widgetGeneralMap = WidgetGeneralMap;

  drawerBodyStyle = {
    padding: '0px'
  };

  panelHeaderStyle = {
    padding: '4px 12px'
  }

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
        选择{this.state.widget.name} 
        <DoubleLeftOutlined className={`${styles.mzDesignBoardMenu  } pointer`} onClick={this.closeDrawer} />
      </div>
     );
     const widgetBlocks = this.widgetGeneralOptions.get(this.state.widget.name)?.map(item => {

        const widgetItems = this.widgetGeneralMap.get(item)?.map(widget => {
          return (
            <div className={styles.widgetItem} key={widget.title}>
              <img src={widget.image} className={styles.widgetItemImg} alt={widget.title} />
              <div className={styles.widgetItemTitle}>
                { widget.title }
              </div>
            </div>
          )
        });

        return (
          <Panel header={item} key={item}  className="site-collapse-custom-panel">
            <div className={styles.widgetItemsBox}>
              {widgetItems}
            </div>
          </Panel>
        )
     });
     console.log(this.widgetGeneralOptions.get(this.state.widget.name));
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
          bodyStyle={this.drawerBodyStyle}
          onClose={this.closeDrawer}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
        <Collapse
          bordered={false}
          defaultActiveKey={this.widgetGeneralOptions.get(this.state.widget.name)}
          expandIconPosition="right"
          ghost={true}
          className="site-collapse-custom-collapse"
        >      
          { widgetBlocks }
        </Collapse>
        </Drawer>
      </div>
    );
  }
}

export default DesignBoard;
