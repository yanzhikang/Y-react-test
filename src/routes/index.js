import React from "react";
import { asyncComponent as async } from '../utils/asyncComponent.js';
import { Redirect } from "react-router-dom";

// import Test1 from "../pages/test/Test1";
// import Test2 from "../pages/test/Test2.tsx";
import Login from "../pages/User/Login.tsx";
import YLayout from "../pages/YLayout/YLayout";
import Fail from "../pages/Fail/404";

import Home from "@/pages/Home/Home";

// import MenusManagement from "@/pages/system/menusManagement.jsx";
// import UsersManagement from "@/pages/system/usersManagement";

export default [
	{
		path: "/",
		exact: true,
		component: Login,
	},
	{
		path: "/login",
		component: async(() => import(/* webpackChunkName: "login" */ '../pages/User/Login.tsx')),
	},
	{
		path: "/layout",
		component: YLayout,
		routes: [
			{
				path: "/layout",
				exact: true,
				render: () => <Redirect to={"/layout/home"}></Redirect>,
			},
			{
				path: "/layout/home",
				component: Home,
			},
			{
				path: "/layout/test1",
				component: () => import(/* webpackChunkName: "Test1" */ '../pages/test/Test1.tsx'),
				// component: async(() => import(/* webpackChunkName: "Test1" */ '../pages/test/Test1.tsx')),
			},
			{
				path: "/layout/test2",
				component: async(() => import(/* webpackChunkName: "Test2" */ '../pages/test/Test2.tsx')),
			},
			// {
			// 	path:"/layout/system",
			// 	render: () => <Redirect to={"/layout/system/menusManagement"}></Redirect>,
			// 	routes:[
			// 		{
			// 			path: "/layout/system/menusManagement",
			// 			component: MenusManagement,
			// 		},
			// 		{
			// 			path: "/layout/system/usersManagement",
			// 			component: UsersManagement,
			// 		},
			// 	]
			// },
			{
				path: "/layout/system/menusManagement",
				component: async(() => import(/* webpackChunkName: "menusManagement" */  '@/pages/system/menusManagement.jsx')),
			},
			{
				path: "/layout/system/usersManagement",
				component: () => import(/* webpackChunkName: "UsersManagement" */  '@/pages/system/usersManagement.js')
				// component: async(() => import(/* webpackChunkName: "UsersManagement" */  '@/pages/system/usersManagement.js'))
			},
			{
				path: "*",
				render: () => <Redirect to={"/layout/home"}></Redirect>,
			},
		],
	},
	{
		path: "*",
		render: () => <Redirect to={"/"}></Redirect>,
	},
];


// https://github.com/dibaosong/react-knowledge/blob/master/package.json
// react-loadable
// 在react中不能直接通过import()进行按需引入
// https://www.cnblogs.com/cckui/p/11492510.html
// 为什么？？
// 通过import()引入的是promise对象，而react需要的是一个组件形式的对象，具体需要看knowe/react-loadable 代码


// loadComponent()
// .then(module => module.default)
// .then((Component) => {
// 	this.setState({Component})
// })
// .catch((err) => {
// 	console.error(`Cannot load component in <AsyncComponent />`);
// 	throw err
// })