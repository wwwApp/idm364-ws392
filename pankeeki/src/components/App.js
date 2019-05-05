import React, { Component } from "react";
import base from "../js/base";
import Nav from "./Nav";

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
    this.ref = base.syncState("pancakes", {
      context: this,
      state: "pancakes"
    });
  };

  render() {
    return (
      <Nav
        pancakes={this.state.pancakes}
        orders={this.state.orders}
        updatePancake={this.updatePancake}
        deletePancake={this.deletePancake}
        addToOrder={this.addToOrder}
        reloadPancake={this.reloadPancake}
      />
    );
  }
}

export default App;
