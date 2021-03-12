import React from "react";
import { Redirect } from "react-router-dom";

import Test1 from "../pages/test/Test1";
import Test2 from "../pages/test/Test2.tsx";
import Login from "../pages/User/Login.tsx";
import YLayout from "../pages/YLayout/YLayout";
import Fail from "../pages/Fail/404";

import Home from '@/pages/Home/Home'

import MenusManagement from '@/pages/system/menusManagement'
import UsersManagement from '@/pages/system/usersManagement'

export default [
	{
		path: "/login",
		exact: true,
		component: Login,
	},
	{
		path: '/',
		// exact: true,
		component: YLayout,
		routes: [
			// {
			// 	path: "/home", 
			// 	exact:true,
			// 	render: () => (
			// 		<Redirect to={"/home/home"} />
			// 	)
			// },
			{
				path: "/home",
				exact: true,
				component: Home,
			},
			{
				path: "/test1",
				exact: true,
				component: Test1,
			},
			{
				path: "/test2",
				exact: true,
				component: Test2,
			},
			{
				path: '/menusManagement',
				exact: true,
				component: MenusManagement
			},
			{
				path: '/usersManagement',
				exact: true,
				component: UsersManagement
			}, 
			{
				path: '*',
				component: Fail,
			}
		]
	},
	{
		path: "404",
		component: Fail,
	},
];
