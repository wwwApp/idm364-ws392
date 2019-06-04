import React, { Component } from "react";
import styled from "styled-components";
import Edit from "./EditPancakeForm.js";
import Header from "./Header";
import GridLayout from "./GridLayout";

class Inventory extends Component {
  render() {
    return (
      <StyledInventory className="wrapper">
        <Header h1="Inventory" h2="インベントリー" />
        <GridLayout>
          {Object.keys(this.props.pancakes).map(key => {
            if (this.props.pancakes[key]) {
              return (
                <Edit
                  key={key}
                  index={key}
                  pancake={this.props.pancakes[key]}
                  updatePancake={this.props.updatePancake}
                  removePancake={this.props.removePancake}
                />
              );
            } else return null;
          })}
        </GridLayout>
        <div>
          <button
            className="btn-reload"
            onClick={() => this.props.reloadPancake()}
          >
            Reload Pancakes
          </button>
        </div>
      </StyledInventory>
    );
  }
}

const StyledInventory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-reload {
    background-color: ${props => props.theme.mainBlue};
    color: white;
    width: 10rem;
    height: 3rem;
    border-radius: 2rem;
    margin: 2rem auto;
  }
`;

export default Inventory;
