import React from "react";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <button>About Us</button>
      <button>Contact Us</button>
      <button>Home Page</button>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
