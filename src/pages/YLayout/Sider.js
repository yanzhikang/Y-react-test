
import { withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


const { Sider } = Layout;
const { SubMenu } = Menu;

function YSider(props) {
  const onCollapse = collapsed => {
    // console.log(collapsed);
  };
  const clickMenuItem = item =>{
    console.log(item);
    props.history.push(item.key)
  }
  return (
    <>
      <Sider collapsible onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={clickMenuItem}>
          <Menu.Item key="/home/home" icon={<PieChartOutlined />} >
            首页
                </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="功能清单">
            <Menu.Item key="/home/test1">test1</Menu.Item>
            <Menu.Item key="/home/test2">test2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="系统设置">
            <Menu.Item key="6">菜单管理</Menu.Item>
            <Menu.Item key="8">用户管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  )
}

export default withRouter(YSider)