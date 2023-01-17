import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
export default function App() {
  return (
    <div className="App">
      <button>About Us</button>
      <button>Contact Us</button>
      <button>Home Page</button>
      <Switch>
        <Route path="/About"></Route>
        <About />
      </Switch>
    </div>
  );
}
