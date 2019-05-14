import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Reciept from "./Reciept";
import Header from "./Header";

class Order extends Component {
  state = {
    isOpen: false
  };

  openReceipt = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    const receiptClasses = [
      "receipt",
      this.state.isOpen ? "receipt--open" : ""
    ];

    const totalOrderNum = Object.keys(this.props.orders).reduce(
      (accOrder, key) => {
        const order = this.props.orders[key];
        return accOrder + order;
      },
      0
    );

    return (
      <StyledOrder className="wrapper">
        <Header h1="Pancake" h2="パンケーキ" />
        <Menu
          pancakes={this.props.pancakes}
          addToOrder={this.props.addToOrder}
        />
        <Reciept
          pancakes={this.props.pancakes}
          orders={this.props.orders}
          receiptClasses={receiptClasses}
        />
        <button className="btn-open" onClick={() => this.openReceipt()}>
          {this.state.isOpen ? "X" : totalOrderNum}
        </button>
      </StyledOrder>
    );
  }
}

const StyledOrder = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 175px auto;

  .header {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .menu {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: span 2;
  }

  .receipt {
    grid-column-start: 2;
    grid-column-end: end;
    grid-row-start: 1;
    grid-row-end: span end;
  }

  .btn-open {
    opacity: 0;
  }

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn-open {
      opacity: 1;
      top: 0;
      left: 0;
      position: fixed;
      z-index: 1;
      width: 3rem;
      height: 3rem;
      font-weight: 700;
      font-size: 1.5rem;
      background-color: #31549e;
      color: white;
    }
  }
`;

export default Order;