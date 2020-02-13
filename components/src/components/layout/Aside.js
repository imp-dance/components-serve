import React from "react";
import styled from "styled-components";
import "../styles/App.scss";
const StyledAside = styled.aside`
  background: #fff;
  padding: 20px;
  border-right: 1px solid #ddd;
`;
function Aside({ children }) {
  return <StyledAside>{children}</StyledAside>;
}

export default Aside;
