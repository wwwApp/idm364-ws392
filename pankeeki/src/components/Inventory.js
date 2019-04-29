import React, { Component } from "react";
import styled from "styled-components";
import Edit from "./EditPancakeForm.js";

class Inventory extends Component {
  render() {
    return (
      <StyledInventory>
        <div className="header">
          <h1>Inventory</h1>
          <h2>インベントリー</h2>
        </div>
        <Edit />
      </StyledInventory>
    );
  }
}

const StyledInventory = styled.div``;

export default Inventory;
