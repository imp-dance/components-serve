import React from "react";
import styled from "styled-components";
import "../styles/App.scss";
const PageContainer = styled.div`
  display: flex;
  aside {
    flex-grow: 2;
    max-width: 250px;
    min-width: 200px;
  }
  main {
    flex-grow: 10;
  }
`;
const VerticalStretch = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  div {
    flex: 1;
  }
`;
function Aside({ children }) {
  return (
    <VerticalStretch>
      <PageContainer>{children}</PageContainer>
    </VerticalStretch>
  );
}

export default Aside;
