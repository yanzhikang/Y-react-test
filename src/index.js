import "./assets/css/reset.css";
import "./assets/css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";

import routes from "./routes/index";
// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './reducers';

import "./assets/css/App.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			{renderRoutes(routes)}
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
