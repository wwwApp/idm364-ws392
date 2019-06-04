import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SvgWrapper from "./SvgWrapper";

class Nav extends Component {
  render() {
    return (
      <>
        <StyledNav className="nav">
          <ul>
            <NavLink exact to="/">
              <li className="link">
                <div className="icon">
                  <SvgWrapper name="nav-order" />
                </div>
                <span className="text">order</span>
              </li>
            </NavLink>
            <NavLink to="/inventory">
              <li className="link">
                <div className="icon">
                  <SvgWrapper name="nav-inventory" />
                </div>
                <span className="text">inventory</span>
              </li>
            </NavLink>
          </ul>
        </StyledNav>
      </>
    );
  }
}

const StyledNav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: ${props => props.theme.baseGray};
    width: 100%;
    height: 4rem;
    margin: 0;
    padding: 0;
    bottom: 0;
    position: fixed;

    a {
      width: 100%;

      &.active {
        background-color: ${props => props.theme.activePink};
      }
    }
    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 15px;
      max-width: 100%;

      .icon {
        width: 1.5rem;
        margin: 0 auto;
        fill: ${props => props.theme.mainBlue};
      }

      .text {
        font-size: 0.75rem;
      }
    }
  }
`;

export default Nav;
