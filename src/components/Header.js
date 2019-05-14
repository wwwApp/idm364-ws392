import React from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <StyledHeader className="header">
      <h1>{props.h1}</h1>
      <h2>{props.h2}</h2>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 2rem 0;
  text-align: center;

  > * {
    margin: 0;
  }

  h1 {
    font-weight: 700;
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

export default Header;
