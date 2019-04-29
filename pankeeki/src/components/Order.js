import React, { Component } from "react";
import styled from "styled-components";
import pancakes from "./../js/pancakes";
import Menu from "./Menu";
import Reciept from "./Reciept";

class Order extends Component {
  state = {
    pancakes: []
  };

  componentDidMount() {
    this.setState({ pancakes });
  }

  render() {
    return (
      <StyledOrder>
        <Menu pancakes={this.state.pancakes} />
        <Reciept />
      </StyledOrder>
    );
  }
}

const StyledOrder = styled.div`
  display: flex;
  height: 100vh;
`;

export default Order;
