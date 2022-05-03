import React, { Profiler } from "react";
import ReactDOM from "react-dom";

import "./assets/css/main/index.css";
import App from "./App";
// import oldApp from './oldApp';
// import { BrowserRouter } from 'react-router-dom';

// Redux and react-redux will handle all of our actions toward our back-end
// Provider keeps track of 'store' which is a global state

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./state management/reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,

	document.getElementById("root")
);
