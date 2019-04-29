import React, { Component } from "react";
import styled from "styled-components";
import Pancake from "./Pancake";

class Menu extends Component {
  render() {
    return (
      <StyledMenu>
        <div className="header">
          <h1>PANCAKE</h1>
          <h2>パンケーキ</h2>
        </div>
        <div className="menu">
          {Object.keys(this.props.pancakes).map(key => (
            <Pancake key={key} details={this.props.pancakes[key]} />
          ))}
        </div>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled.div`
  overflow-y: auto;

  .menu {
    display: flex;
    flex-wrap: wrap;

    > * {
      margin: 1rem;
    }
  }
`;

export default Menu;
