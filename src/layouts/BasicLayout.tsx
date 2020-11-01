import React from 'react';
import { connect } from 'umi';
import { ConnectState } from '@/models/connect';
import { BarChartOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Menu from 'antd/lib/menu';
import { Row, Col } from 'antd/lib/grid';
import Input from 'antd/lib/input';
import styles from './BasicLayout.less';

const { Search } = Input;

const { SubMenu } = Menu;

const logo = require('../assets/logo.svg');

const BasicLayout: React.FC<{}> = (props) => {
  return (
    <div className={styles.pageBasic}>
      <div className={styles.pageMain}>
        <div className={styles.pageHeader}>
          <div className={styles.container}>
            <div className="d-flex">
              <a className={styles.headerBrand}>
                <img src={logo} className={styles.headerBrandImg} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.pageHeaderMenu}>
          <div className={styles.container}>
            <div className="align-items-center">
              <Row>
                <Col span={18} className={styles.customMenuStyle}>
                  <Menu mode="horizontal">
                    <Menu.Item key="chartTpl" icon={<BarChartOutlined />}>
                      图表样板
                    </Menu.Item>
                    <Menu.Item key="screenTpl" icon={<AppstoreOutlined />}>
                      报告样板
                    </Menu.Item>
                    <SubMenu
                      key="SubMenu"
                      popupClassName={styles.subMenuClassName}
                      icon={<SettingOutlined />}
                      title="数据工具"
                    >
                      <Menu.ItemGroup title="数据转换">
                        <Menu.Item key="convert:1">CSV转Excel</Menu.Item>
                        <Menu.Item key="convert:2">JSON转Excel</Menu.Item>
                        <Menu.Item key="convert:3">XML转Excel</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup title="Excel">
                        <Menu.Item key="editOnline:1">在线编辑</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="designer">
                      <a href="./designer/operate" target="_blank" rel="noopener noreferrer">
                        报告设计
                      </a>
                    </Menu.Item>
                  </Menu>
                </Col>
                <Col span={6} className={styles.menuInputContainer}>
                  <Search placeholder="查找样板" allowClear />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles.pageContent}>{props.children}</div>
      </div>
      <footer className={styles.pageFooter} />
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  settings,
}))(BasicLayout);
