import React, { Component } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import base from "../js/base";
import pancakes from "./../js/pancakes.js";
import Nav from "./Nav";
import Order from "./Order";
import Inventory from "./Inventory";
import NotFound from "./NotFound";

class App extends Component {
  state = {
    pancakes: [],
    orders: []
  };

  componentDidMount() {
    this.ref = base.syncState("pancakes", {
      context: this,
      state: "pancakes"
    });
  }

  updatePancake = (key, updatedPancake) => {
    console.log("update pancake");
    const pancakes = { ...this.state.pancakes };
    pancakes[key] = updatedPancake;
    this.setState({ pancakes });
  };

  deletePancake = key => {
    console.log("delete pancake");
    const pancakes = { ...this.state.pancakes };
    pancakes[key] = null;
    this.setState({ pancakes });
  };

  addToOrder = key => {
    console.log("add to order");
    const orders = { ...this.state.orders };
    // if already exisiting add 1, otherwise assign 1
    if (orders[key]) {
      orders[key] += 1;
    } else {
      orders[key] = 1;
    }
    this.setState({ orders });
  };

  reloadPancake = () => {
    this.setState({ pancakes });
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Order
                pancakes={this.state.pancakes}
                orders={this.state.orders}
                addToOrder={this.addToOrder}
              />
            )}
          />
          <Route
            path="/inventory"
            render={() => (
              <Inventory
                pancakes={this.state.pancakes}
                updatePancake={this.updatePancake}
                deletePancake={this.deletePancake}
                reloadPancake={this.reloadPancake}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
        <Nav />
      </>
    );
  }
}

export default App;
