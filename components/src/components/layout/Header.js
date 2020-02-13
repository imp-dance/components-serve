import React from "react";
import styled from "styled-components";
import "../styles/App.scss";
const StyledHeader = styled.header`
  background: #f9f9f9;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  height: 70px;
  h1 {
    font-size: 1.4em;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-height: 25px;
  }
`;
const LeftContent = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-left: 10px;
    align-items: center;
    justify-content: center;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <LeftContent>
        <img src="https://haakon.underbakke.net/images/sl1ck.jpg" alt="sl1ck" />
        <h1>
          <a href="#">components</a>
        </h1>
      </LeftContent>
    </StyledHeader>
  );
}

export default Header;
