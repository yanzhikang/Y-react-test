import "./layout.css";
import { Layout, Breadcrumb, Card } from "antd";

import YSider from "./Sider";

const { Header, Content, Footer } = Layout;

export default function YLayout(props) {
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<YSider></YSider>
				<Layout className="site-layout">
					<Header className="site-layout-background y-Header">Yanzhi</Header>
					<Content style={{ margin: "0 16px" }}>
						<Breadcrumb style={{ margin: "16px 0" }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<Card style={{ minHeight: 360 }}>
							{props.children}
						</Card>
					</Content>
					<Footer style={{ textAlign: "center" }}>Yanzhi</Footer>
				</Layout>
			</Layout>
		</>
	);
}
