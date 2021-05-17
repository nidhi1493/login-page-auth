import logo from './logo.svg';
import './App.css';
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowDetails from "../src/components/ShowDetails";
import Routes from "../src/components/Routes/index";

import React, { Fragment } from "react";
import "./index.css"

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/login" component={LoginPage} />
      <Route path="/showDetails" component={ShowDetails} />
    </Router>
  );
}
export default App;
