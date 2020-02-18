import React from "react";
import styled from "styled-components";
import "../styles/App.scss";
const StyledMain = styled.main`
  background: #fff;
  padding: 20px;
  overflow-y: auto;
  max-width: 1000px;
`;
function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
