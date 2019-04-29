import React, { Component } from "react";
import styled from "styled-components";
import SvgWrapper from "./SvgWrapper";

class EditPancakeForm extends Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    // update that fish
    // 1. Take a copy of the curernt fish
    // const updatedFish = {
    //   ...this.props.fish,
    //   [event.currentTarget.name]:
    //     event.currentTarget.name === "price"
    //       ? parseFloat(event.currentTarget.value)
    //       : event.currentTarget.value
    // };
    // this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <StyledForm className="block">
        <div className="item">
          <SvgWrapper name="pancake-choco" />
        </div>
        <div className="item item-wrapper">
          <label for="image">Image</label>
          <select
            type="text"
            name="image"
            onChange={this.handleChange}
            // value={this.props.fish.status}
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
          placeholder="name"
          onChange={this.handleChange}
          // value={this.props.fish.name}
        />
        <input
          className="item"
          type="text"
          name="price"
          placeholder="price"
          onChange={this.handleChange}
          // value={this.props.fish.price}
        />
        <div className="item item-wrapper">
          <label for="status">Availability</label>
          <select
            type="text"
            name="status"
            onChange={this.handleChange}
            // value={this.props.fish.status}
          >
            <option value="available">Sweet!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
        </div>
        <textarea
          className="item"
          name="desc"
          onChange={this.handleChange}
          placeholder="description"
          // value={this.props.fish.desc}
        />
        <div
          className="btn-remove item"
          onClick={() => this.props.deleteFish(this.props.index)}
        >
          <SvgWrapper name="add" />
        </div>
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

  .item {
    border-bottom: 1px solid #31549e;
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
    transform: rotate(45deg);
    align-self: center;
    padding-bottom: 0;
  }
`;

export default EditPancakeForm;
