import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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

    this.ref = base.syncState("orders", {
      context: this,
      state: "orders"
    });
  }

  updatePancake = (key, updatedPancake) => {
    console.log("update pancake");
    const pancakes = { ...this.state.pancakes };
    pancakes[key] = updatedPancake;
    this.setState({ pancakes });
  };

  removePancake = key => {
    console.log("remove pancake");
    const pancakes = { ...this.state.pancakes };
    pancakes[key] = null;
    this.setState({ pancakes });

    // don't forget to remove from order too
    this.removeOrder(key);
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

  removeOrder = key => {
    console.log("remove from order");
    const orders = { ...this.state.orders };
    // if already exisiting add 1, otherwise assign 1
    orders[key] = null;
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
                removeOrder={this.removeOrder}
              />
            )}
          />
          <Route
            path="/inventory"
            render={() => (
              <Inventory
                pancakes={this.state.pancakes}
                updatePancake={this.updatePancake}
                removePancake={this.removePancake}
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
