import "./layout.css";
import { Layout, Breadcrumb, Card } from "antd";
import { renderRoutes } from "react-router-config";

import YSider from "./Sider";
import YHeader from "./YHeader.tsx";

const { Header, Content, Footer } = Layout;

export default function YLayout(props) {
    const { route } = props;
	// console.log(props)
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<YSider></YSider>
				<Layout className="site-layout">
					<Header className="site-layout-background y-Header"><YHeader></YHeader></Header>

					<Content style={{ margin: "0 16px" }}>
						<Breadcrumb style={{ margin: "16px 0" }}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<Card style={{ minHeight: 360 }}>
							{renderRoutes(route.routes)}
						</Card>
					</Content>
					<Footer style={{ textAlign: "center" }}>Yanzhi</Footer>
				</Layout>
			</Layout>
		</>
	);
}
