import "./index.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Calculator from "./main/Calculator";

ReactDOM.render(
	<Fragment>
		<h2>Calculadora do Satanás</h2>
		<Calculator />
	</Fragment>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
