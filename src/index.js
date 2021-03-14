import "./assets/css/reset.css";
import './assets/css/FirstScreen.css'
import "./assets/css/login.css";
import "./assets/css/index.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "./routes/index";
import { store } from "./reducers";

import FirstScreen from "./FirstScreen.js";

// function listen() {
// 	if (document.readyState == "complete") {
		// 资源加载完成
		ReactDOM.render(
			<Provider store={store}>
				<Router>{renderRoutes(routes)}</Router>
			</Provider>,
			document.getElementById("root")
		);
// 	} else {
// 		// 资源加载中
// 		ReactDOM.render(
// 			<Router>
// 				<Route path="/" component={FirstScreen} />
// 			</Router>,
// 			document.getElementById("root")
// 		);
// 	}
// }

// document.onreadystatechange = listen;
