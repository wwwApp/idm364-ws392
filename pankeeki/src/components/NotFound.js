import React from "react";
import styled from "styled-components";

const NotFound = props => {
  return <StyledMessage>Not Found :(</StyledMessage>;
};

const StyledMessage = styled.h1`
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 4rem;
  text-align: center;
`;

export default NotFound;
