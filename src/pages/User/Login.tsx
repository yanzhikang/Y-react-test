import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";

function LoginIn(props) {
	const [form] = Form.useForm();
	async function clickLogin() {
		try {
			const values = await form.validateFields();
			if (values.username == "admin" && values.password == "123456") {
				props.history.push("/layout/home");
			} else {
				notification.error({
					message: "登陆失败",
					description: "用户名或密码错误！",
                    duration: 1,
				});
			}
		} catch (errorInfo) {
			console.log("Failed:", errorInfo);
		}
	}
	return (
		<div className="login">
			<div className="login-form">
				<p>Yanzhi</p>
				<Form form={form} name="login" layout="vertical">
					<Form.Item
						label=""
						name="username"
						rules={[{ required: true, message: "Please input your username!" }]}
					>
						<Input
							size="large"
							placeholder="请输入账户名"
							prefix={<UserOutlined className="site-form-item-icon" />}
						/>
					</Form.Item>

					<Form.Item
						label=""
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password
							size="large"
							placeholder="请输入密码"
							prefix={<KeyOutlined className="site-form-item-icon" />}
						/>
					</Form.Item>

					{/* <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

					<Form.Item>
						<Button type="primary" size="large" style={{ width: "100%" }} onClick={clickLogin}>
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
export default withRouter(LoginIn);
