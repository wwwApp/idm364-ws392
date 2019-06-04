import React, { Component } from "react";
import styled from "styled-components";
import SvgWrapper from "./SvgWrapper";

class EditPancakeForm extends Component {
  handleChange = event => {
    // Take a copy of the current pancake
    const updatedPancake = {
      ...this.props.pancake,
      [event.currentTarget.name]: event.currentTarget.value
    };

    console.log(updatedPancake);
    this.props.updatePancake(this.props.index, updatedPancake);
  };

  render() {
    const { image, name, desc, price, status } = this.props.pancake;
    return (
      <StyledForm className="block">
        <div className="item">
          <SvgWrapper name={image} />
        </div>
        <div className="item item-wrapper">
          <label htmlFor="image">Image</label>
          <select
            type="text"
            name="image"
            onChange={this.handleChange}
            value={image}
          >
            <option value="pancake-strawberry">Strawberry</option>
            <option value="pancake-blueberry">Blueberry</option>
            <option value="pancake-kiwi">Kiwi</option>
            <option value="pancake-choco">Chocolate</option>
            <option value="pancake-mango">Mango</option>
          </select>
        </div>
        <input
          className="item"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          className="item"
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
          placeholder="8 (in dollars)"
        />
        <div className="item item-wrapper">
          <label htmlFor="status">Availability</label>
          <select
            type="text"
            name="status"
            onChange={this.handleChange}
            value={status}
          >
            <option value="available">Sweet!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
        </div>
        <textarea
          className="item"
          name="desc"
          onChange={this.handleChange}
          value={desc}
        />
        <button
          className="btn-remove item"
          onClick={() => this.props.removePancake(this.props.index)}
        >
          <SvgWrapper name="remove" />
        </button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.div`
  padding: 1rem;

  input,
  textarea {
    border: none;
    max-width: 100%;

    :focus {
      outline: none;
    }
  }

  textarea {
    height: 3rem;
  }

  .item {
    border-bottom: 1px solid ${props => props.theme.mainBlue};
    width: 100%;
    padding: 0.75rem 0;

    :first-child,
    :last-child {
      border: none;
      text-align: center;
    }
  }

  .item-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .btn-remove {
    width: 2rem;
    align-self: center;
    padding-bottom: 0;
  }
`;

export default EditPancakeForm;
