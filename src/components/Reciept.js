import React, { Component } from "react";
import styled from "styled-components";
import { formatPrice } from "./../js/utils.js";
import Header from "./Header";

class Reciept extends Component {
  renderOrder = key => {
    const pancake = this.props.pancakes[key];
    const order = this.props.orders[key];

    // no render when pancake/order is removed
    // OR sold out
    if (!pancake || pancake.status === "unavailable" || !order) return null;

    return (
      <li key={key} className="item">
        <div>
          <div className="detail">
            {order}
            <span className="left-margin">{pancake.name}</span>
          </div>
          <div className="price">{formatPrice(pancake.price * order)}</div>
        </div>
        <div className="remove" onClick={() => this.props.removeOrder(key)}>
          <button className="btn-remove">x</button>
        </div>
      </li>
    );
  };

  render() {
    const today = new Date();
    const date = today.toLocaleDateString();
    const total = Object.keys(this.props.orders).reduce((accTotal, key) => {
      const pancake = this.props.pancakes[key];
      const order = this.props.orders[key];
      // no calc when pancake is removed OR sold out
      if (!pancake || pancake.status === "unavailable") return accTotal + 0;
      return accTotal + pancake.price * order;
    }, 0);

    return (
      <StyledReciept className={this.props.receiptClasses}>
        <Header h1="Receipt" h2="レシット" />
        <span className="greeting">
          Thank you for visiting us today! <br />
          Hope to see you again soon :)
        </span>
        <div className="body">
          <span className="date">
            date<span className="left-margin">{date}</span>
          </span>
          <ul className="order">
            {Object.keys(this.props.orders).map(key => this.renderOrder(key))}
          </ul>
          <span className="total">
            total<span className="left-margin">{formatPrice(total)}</span>
          </span>
        </div>
      </StyledReciept>
    );
  }
}

const StyledReciept = styled.aside`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2rem;
  min-height: 100vh;
  margin-bottom: -4rem;

  .left-margin {
    margin-left: 1.5rem;
  }

  .header {
    h1 {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 0.3rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  .greeting {
    font-size: 0.8rem;
    letter-spacing: 1.15px;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .body {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .order {
    border-top: 1px solid;
    border-bottom: 1px solid;
    width: 100%;
    margin: 1.25rem 0;
    padding: 1.5rem 0;
    overflow-y: auto;

    .item {
      display: flex;
      overflow: hidden;

      > * {
        flex-grow: 1;
      }

      .price {
        text-align: right;
        padding-bottom: 1.25rem;
      }

      .remove {
        margin-left: 20px;
        max-width: 0px;
        transition: 0.5s;

        .btn-remove {
          background-color: ${props => props.theme.mainBlue};
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          height: 100%;
          width: 100%;
        }
      }

      &:hover .remove {
        max-width: 56px;
      }
    }
  }

  .total {
    align-self: flex-end;
    max-width: 100%;

    span {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 1080px) {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0;
    width: 0;
    transition: 0.5s;

    > * {
      opacity: 0;
      transition: 0.25s;
    }

    &.receipt--open {
      padding: 0 2rem;
      width: 400px;

      > * {
        opacity: 1;
      }
    }
  }

  @media screen and (max-width: 400px) {
    &.receipt--open {
      width: 100%;
    }
  }
`;

export default Reciept;
