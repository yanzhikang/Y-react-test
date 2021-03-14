import React from "react";
import { Redirect } from "react-router-dom";

import Test1 from "../pages/test/Test1";
import Test2 from "../pages/test/Test2.tsx";
import Login from "../pages/User/Login.tsx";
import YLayout from "../pages/YLayout/YLayout";
import Fail from "../pages/Fail/404";

import Home from "@/pages/Home/Home";

import MenusManagement from "@/pages/system/menusManagement";
import UsersManagement from "@/pages/system/usersManagement";

export default [
	{
		path: "/",
		exact: true,
		component: Login,
	},
	{
		path: "/login",
		component: Login,
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
				component: Test1,
			},
			{
				path: "/layout/test2",
				component: Test2,
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
				component: MenusManagement,
			},
			{
				path: "/layout/system/usersManagement",
				component: UsersManagement,
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