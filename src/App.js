import React from "react";
import "./styles.css";
import NameList from "./components/NameList";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Login} />
        <Route path="/nameList" component={NameList} />
      </div>
    </Router>
  );
}
