import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import styled from "styled-components";
import SvgWrapper from "./SvgWrapper";
import Order from "./Order";
import Inventory from "./Inventory";
import NotFound from "./NotFound";

class Nav extends Component {
  clickHandler = () => {
    console.log("clikced");
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Order
                  pancakes={this.props.pancakes}
                  orders={this.props.orders}
                  addToOrder={this.props.addToOrder}
                />
              )}
            />
            <Route
              path="/inventory"
              render={() => (
                <Inventory
                  pancakes={this.props.pancakes}
                  updatePancake={this.props.updatePancake}
                  deletePancake={this.props.deletePancake}
                  reloadPancake={this.props.reloadPancake}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
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
        </React.Fragment>
      </Router>
    );
  }
}

const StyledNav = styled.nav`
  ul {
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

    a {
      width: 100%;

      &.active {
        background-color: #ffcfcf;
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
        fill: #31549e;
      }

      .text {
        font-size: 0.75rem;
      }
    }
  }
`;

export default Nav;
