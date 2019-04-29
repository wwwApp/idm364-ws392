import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./css/normalize.css";
import "./css/style.css";
import Nav from "./components/Nav";
import Order from "./components/Order";
import Inventory from "./components/Inventory";
import NotFound from "./components/NotFound";

render(
  <Router>
    <React.Fragment>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <Nav />

      <Switch>
        <Route exact path="/" component={Order} />
        {/* <Route
          path="/about"
          render={() => <About isCustom="hello" />}
        /> */}
        <Route path="/inventory" component={Inventory} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>,
  document.getElementById("app")
);
