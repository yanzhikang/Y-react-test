import React from "react";

class ClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
      name: "tyk",
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				date: new Date(),
			});
		}, 1000);
		console.log("componentDidMount");
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		console.log("componentWillUnmount");
	}

	btnClick = (e)=> {
    console.log(this)
		console.log(e);
		this.setState({
			name: "yanzhi",
		});
	};
	render() {
		console.log("render");
		return (
			<div>
				<h2>class test</h2>
				<p>date: {this.state.date.toLocaleTimeString()}</p>
				<p>name: {this.state.name}</p>
				<button onClick={this.btnClick}>click</button>
			</div>
		);
	}
}

export default ClassComponent;

// 脚手架：next

// 状态管理库：clean-state

// hooks库：react-use

// 逻辑判断库：react-if

// cssInjs库：styled-components

// 这一套能让你在写C端项目的时候爽到

// 状态管理：mobx，比 redux 好用，官方称甚至也比 redux 快，mobx 用法更简单，也适合中大型项目
// UI：antd 老生常谈就不说了
// Code Spliting：@loadable/component 支持 class 组件和 function 组件
// path-to-regexp：url 匹配库
// store：本地存储库，api 很简单，可以当 localStorage 用
// dayjs：非常小的日期库，代替 momentjsps:
// 如果你使用不可变数据，可以尝试 immutablejs
