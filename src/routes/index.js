import React from "react";
import { Redirect } from "react-router-dom";

import Test1 from "../pages/test/Test1";
import Test2 from "../pages/test/Test2.tsx";
import Login from "../pages/User/Login";
import YLayout from "../pages/YLayout/YLayout";
import Fail from "../pages/Fail/404";

import Home from '@/pages/Home/Home'

export default [
	{
		path: '/',
		exact: true,
		render: () => (
			<Redirect to={"/login"} />
		)
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/home",
		component: YLayout,
		routes: [
			{
				path: "/home", 
				exact:true,
				render: () => (
					<Redirect to={"/home/home"} />
				)
			},
			{
				path: "/home/home",
				component: Home,
			},
			{
				path: "/home/test1",
				component: Test1,
			},
			{
				path: "/home/test2",
				component: Test2,
			},
		]
	},
	{
		path: "*",
		component: Fail,
	},
];
