import { Spin } from "antd";
import React, { Component } from "react";

class FirstScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="firstScreen">
				<Spin size="large" />
        <p>加载中，请稍后...</p>
			</div>
		);
	}
}

export default FirstScreen;

// https://www.cnblogs.com/smart-girl/p/10493205.html
