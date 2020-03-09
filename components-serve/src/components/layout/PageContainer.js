import React from "react";
import styled from "styled-components";
import "../styles/App.scss";
const PageContainer = styled.div`
  display: flex;
  aside {
    flex-grow: 2;
    max-width: 250px;
    min-width: 200px;
    .hideWhenLarge {
      display: none;
    }
    @media screen and (max-width: 600px) {
      .hideWhenLarge {
        display: block;
      }
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      &.open {
        position: fixed !important;
        opacity: 1;
        width: 100%;
        max-width: 100%;
        pointer-events: all;
        z-index: 9999;
        background: #fff;
      }
    }
  }
  main {
    flex-grow: 10;
  }
`;
const VerticalStretch = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  > div {
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
