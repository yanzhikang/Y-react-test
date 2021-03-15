import "./assets/css/reset.css";
import './assets/css/FirstScreen.css'
import "./assets/css/login.css";
import "./assets/css/index.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";

// import RouterAuth from '@/utils/routerComponent';

import routes from "./routes/index";
import { store } from "./reducers";

import FirstScreen from "./FirstScreen.js";

ReactDOM.render(
	<Provider store={store}>
		<Router>{renderRoutes(routes)}</Router>
	</Provider>,
	document.getElementById("root")
);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Router>
// 			<RouterAuth config={routes}></RouterAuth>
// 		</Router>
// 	</Provider>,
// 	document.getElementById("root")
// );