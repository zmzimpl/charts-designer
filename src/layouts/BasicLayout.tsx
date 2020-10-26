/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'umi';
import { ConnectState } from '@/models/connect';
import styles from './BasicLayout.less';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const { SubMenu } = Menu;

// const noMatch = (
//   <Result
//     status={403}
//     title="403"
//     subTitle="Sorry, you are not authorized to access this page."
//     extra={
//       <Button type="primary">
//         <Link to="/user/login">Go Login</Link>
//       </Button>
//     }
//   />
// );

const BasicLayout: React.FC<{}> = (props) => {
  return (
    <div className={styles['page-basic']}>
      <div className={styles['page-main']}>
        <div className={styles['page-header']}>
          <div className={styles['container']}>
            <div className="d-flex">
              <a className={styles['header-brand']}>
                <img
                  src={require('../assets/logo.svg')}
                  className={styles['header-brand-img']}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles['page-header-menu']}>
          <div className={styles['container']}>
            <div className="align-items-center">
              <Row>
                <Col span={18}>
                  <Menu mode="horizontal">
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                      Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                      Navigation Two
                    </Menu.Item>
                    <SubMenu
                      key="SubMenu"
                      icon={<SettingOutlined />}
                      title="Navigation Three - Submenu"
                    >
                      <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                      </a>
                    </Menu.Item>
                  </Menu>
                </Col>
                <Col span={6} className={styles['menu-input-container']}>
                  <Search placeholder="input search text" allowClear enterButton="Search" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className={styles['page-content']}></div>
      </div>
      <footer className={styles['page-footer']}></footer>
    </div>
  );
};

export default connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
