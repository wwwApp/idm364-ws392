import React, { Component } from "react";
import styled from "styled-components";
import GridLayout from "./GridLayout";
import Pancake from "./Pancake";

class Menu extends Component {
  render() {
    return (
      <StyledMenu className="menu">
        <GridLayout>
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
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div``;

export default Menu;
