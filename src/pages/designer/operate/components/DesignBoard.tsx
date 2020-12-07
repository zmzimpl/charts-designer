import React from 'react';

import { Drawer, Collapse, Button } from 'antd';
import { PubSub } from '@/core/pubsub/pubsub';
import { UndoRedoUtil } from '@/core/undo-redo/undo-redo';
import { DesignTopics } from '@/core/pubsub/Topics';
import {  DoubleLeftOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons';
import GridCanvas from '../../grid-canvas/GridCanvas';
import { WidgetGeneralOptions, WidgetOptionMap, WidgetType } from '@/models/report/insight-widget';
import styles from './DesignBoard.less';

const { Panel } = Collapse;
class DesignBoard extends React.Component {

  widgetGeneralOptions: Map<string, WidgetType[]> = WidgetGeneralOptions;

  widgetGeneralMap = WidgetOptionMap;

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
          widget: data.widget,
          defaultActiveKey: this.widgetGeneralOptions.get(data.widget.name)
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
    },
    defaultActiveKey: this.widgetGeneralOptions.get('图表')
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
            <div className={styles.widgetItem} key={widget.title} draggable={true} >
              <div className={styles.widgetItemOverlay}></div>
              <img src={widget.image} className={styles.widgetItemImg} alt={widget.title} />
              <div className={styles.widgetItemTitle}>
                { widget.title }
              </div>
            </div>
          )
        });
        return (
          <Panel header={item} key={item}  >
            <div className={styles.widgetItemsBox}>
              {widgetItems}
            </div>
          </Panel>
        )
     });

    return (
      <div className={styles.mzDesignBoard} style={{ width: this.state.visible ? 'calc(100% - 256px)' : '100%' }}>
        <div className={styles.mzDesignBoardToolbar}>
        <Button type="link" onClick={(e) => UndoRedoUtil.undo()}>
          <UndoOutlined /> 撤销
        </Button>
        <Button type="link" onClick={(e) => UndoRedoUtil.redo()}>
          <RedoOutlined /> 重做
        </Button>
        </div>
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
          defaultActiveKey={this.state.defaultActiveKey}
          expandIconPosition="right"
          ghost={true}
        >      
          { widgetBlocks }
        </Collapse>
        </Drawer>
      </div>
    );
  }
}

export default DesignBoard;
