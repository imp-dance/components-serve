import React from "react";
import styled, { keyframes } from "styled-components";
import "../styles/App.scss";
const easierLoad = keyframes`
from {
  opacity:0;
}
`;
const StyledMain = styled.main`
  animation: ${easierLoad} 0.25s ease-in-out;
  background: #fff;
  padding: 20px;
  overflow-y: auto;
  max-width: 1000px;
`;
function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
