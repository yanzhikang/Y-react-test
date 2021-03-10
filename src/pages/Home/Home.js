import './home.css'
import { Layout, Breadcrumb, Card } from 'antd';
import YSider from './sider'
const { Header, Content, Footer } = Layout;

export default function Home() {

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <YSider></YSider>
        <Layout className="site-layout">
          <Header className="site-layout-background y-Header">Yanzhi</Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Card style={{ minHeight: 360 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p></Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Yanzhi</Footer>
        </Layout>
      </Layout>
    </>
  )
}