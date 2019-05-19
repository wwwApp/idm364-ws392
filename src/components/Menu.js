import React, { Component } from "react";
import GridLayout from "./GridLayout";
import Pancake from "./Pancake";

class Menu extends Component {
  render() {
    return (
      <GridLayout className="menu">
        {Object.keys(this.props.pancakes).map(key => {
          if (this.props.pancakes[key]) {
            return (
              <Pancake
                key={key}
                index={key}
                pancake={this.props.pancakes[key]}
                addToOrder={this.props.addToOrder}
              />
            );
          } else return null;
        })}
      </GridLayout>
    );
  }
}

export default Menu;
