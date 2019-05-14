import React from "react";
import styled from "styled-components";

const NotFound = props => {
  return (
    <StyledMessage>
      <h1>Not Found :(</h1>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 180px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

export default NotFound;
