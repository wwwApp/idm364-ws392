import React, { Component } from "react";
import styled from "styled-components";

class Reciept extends Component {
  render() {
    let today = new Date();
    let date = today.toLocaleDateString();
    return (
      <StyledReciept>
        <div className="header">
          <h1>Receipt</h1>
          <h2>レシット</h2>
          <p>
            Thank you for visitingg us today! <br />
            Hope to see you again soon :)
          </p>
        </div>
        <div className="main">
          <span className="date">
            date<span className="left-margin">{date}</span>
          </span>
          <div className="order">
            <span className="item">
              <span className="detail">
                1<span className="left-margin">Strawberry Pancake</span>
              </span>
              <span className="price">8.0</span>
            </span>
          </div>
          <span className="total">
            total<span className="left-margin">16.0</span>
          </span>
        </div>
        <img className="barcode" src="./images/barcode.png" alt="Barcode" />
      </StyledReciept>
    );
  }
}

const StyledReciept = styled.aside`
  background-color: white;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2rem;

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

    p {
      font-family: "AmericanTypewriter", Courier, monospace;
      font-size: 0.8rem;
      letter-spacing: 1px;
      margin-top: 1.5rem;
    }
  }

  .main {
    margin-top: 1rem;
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
      & > span {
        display: block;
      }

      .price {
        text-align: right;
      }
    }
  }

  .total {
    align-self: flex-end;

    span {
      font-size: 1.5rem;
    }
  }

  .barcode {
    max-width: 100%;
    margin-top: auto;
    margin-bottom: 3rem;
  }
`;

export default Reciept;
