import React, { Component } from "react";
import styled from "styled-components";

class GridLayout extends Component {
  render() {
    return (
      <StyledGrid className="block-container">{this.props.children}</StyledGrid>
    );
  }
}

const StyledGrid = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  grid-template-columns: auto;
  grid-auto-rows: 1fr;
  grid-row-gap: 1rem;

  > * {
    margin: 1rem;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: auto auto auto;
  }
`;

export default GridLayout;
