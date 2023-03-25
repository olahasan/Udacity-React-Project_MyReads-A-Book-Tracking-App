import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*
we should install react-router-dom in terminal 
and then import BrowserRouter befor use <BrowserRouter><BrowserRouter/>
or BrowserRouter as Router but in this case we will use Router <Router><Router/>
*/
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  // wrapp App component inside BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
