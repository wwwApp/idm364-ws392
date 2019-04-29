import React, { Component } from "react";
import styled from "styled-components";
import SvgWrapper from "./SvgWrapper";

class Pancake extends Component {
  render() {
    const { image, name, desc, price } = this.props.details;

    return (
      <StyledPancake className="block">
        <div className="image">
          <SvgWrapper name={image} />
        </div>
        <h2 className="name">{name}</h2>
        <p className="desc">{desc}</p>
        <span className="price">{price}.0</span>
        <div className="btn-add">
          <SvgWrapper name="add" />
        </div>
      </StyledPancake>
    );
  }
}

const StyledPancake = styled.div`
  height: 17rem;
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
    width: 2rem;
  }
`;

export default Pancake;
