import React, { Component } from "react";
import styled from "styled-components";
import { formatPrice } from "./../js/utils.js";
import SvgWrapper from "./SvgWrapper";

class Pancake extends Component {
  render() {
    const { image, name, desc, price, status } = this.props.pancake;
    const isAvailable = status === "available";

    return (
      <StyledPancake className="block">
        <div className="image">
          <SvgWrapper name={image} />
        </div>
        <h3 className="name">{name}</h3>
        <p className="desc">{desc}</p>
        <span className="price">{formatPrice(price)}</span>
        <button
          className="btn-add"
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? <SvgWrapper name="add" /> : "sorry, sold out :("}
        </button>
      </StyledPancake>
    );
  }
}

const StyledPancake = styled.div`
  padding: 0.5rem;
  align-items: center;

  > * {
    margin: 0;
  }

  .image > svg {
    width: 10rem;
    height: auto;
    margin-bottom: 0.75rem;
  }

  .name {
    font-size: 1.15rem;
    font-weight: 600;
  }

  .desc {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }

  .btn-add {
    margin-top: 0.75rem;
    width: 3rem;
  }

  button.btn-add[disabled] {
    width: 100%;
    font-weight: bold;
    font-size: 1.25rem;
    color: #31549e;
    fill: #31549e;
  }
`;

export default Pancake;
