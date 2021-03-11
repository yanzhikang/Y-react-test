import React from "react";
import { Redirect } from "react-router-dom";

import Test1 from "../pages/test/Test1";
import Test2 from "../pages/test/Test2.tsx";
import Login from "../pages/User/Login";
import YLayout from "../pages/YLayout/YLayout";
import Fail from "../pages/Fail/404";

export default [
	{
		path:'/',
		component: Login,
	},
	{
		path: "*",
		component: Fail,
	},
];
