import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./assets/css/index.css";
import routes from "./routes/index";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import "./assets/css/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/User/Login";
import YLayout from "./pages/YLayout/YLayout";
import Home from "./pages/Home/Home";
import Test1 from "./pages/test/Test1";
import Test2 from "./pages/test/Test2.tsx";
import Fail from "./pages/Fail/404";

ReactDOM.render(
	// <Router>
	// 	<Switch>
	// 		<Route exact path="/">
	// 			<Redirect to="/login"></Redirect>
	// 		</Route>
	// 		<Route path="/login">
	// 			<Login></Login>
	// 		</Route>
	// 		<Route
	// 			path="/home"
	// 			render={({ history, location, match }) => (
	// 				<YLayout history={history} location={location} match={location}>
	// 					<Route exact path="/home" component={Home}></Route>
	// 					<Route path="/home/test1" component={Test1}></Route>
	// 					<Route path="/home/test2" component={Test2}></Route>
	// 				</YLayout>
	// 			)}
	// 		></Route>
	// 		<Route path="*">
	// 			<Fail></Fail>
	// 		</Route>
	// 	</Switch>
	// </Router>,
	<Router>
		{renderRoutes(routes)}
	</Router>,	
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
