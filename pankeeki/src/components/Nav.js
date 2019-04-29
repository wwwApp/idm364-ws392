import React, { Component } from "react";
import styled from "styled-components";
import SvgWrapper from "./SvgWrapper";

const Nav = props => {
  return (
    <StyledNav className="nav">
      <li className="link active">
        <div className="icon">
          <SvgWrapper name="nav-order" />
        </div>
        <span className="text">order</span>
      </li>
      <li className="link">
        <div className="icon">
          <SvgWrapper name="nav-inventory" />
        </div>
        <span className="text">inventory</span>
      </li>
    </StyledNav>
  );
};

const StyledNav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f9f9f9;
  width: 100%;
  height: 4rem;
  margin: 0;
  padding: 0;
  bottom: 0;
  position: fixed;

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    width: 100%;

    .icon {
      width: 1.5rem;
      margin: 0 auto;
    }

    .text {
      font-family: "Barlow Semi Condensed", sans-serif;
      font-size: 0.75rem;
    }
  }

  .active {
    background-color: #ffcfcf;
  }
`;

export default Nav;
