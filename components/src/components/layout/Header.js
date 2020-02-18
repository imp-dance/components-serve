import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/App.scss";
const StyledHeader = styled.header`
  background: #282b34;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  height: 70px;
  color: #f9f9f9;
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
const RightContent = styled.div`
  margin-left: auto;
  button {
    background: #222;
    color: #f9f9f9;
    padding: 5px 19px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (min-width: 600px) {
      display: none;
    }
  }
`;
function Header({ openNav }) {
  return (
    <StyledHeader>
      <LeftContent>
        <img src="https://haakon.underbakke.net/images/sl1ck.jpg" alt="sl1ck" />
        <h1>
          <Link to="/">components</Link>
        </h1>
      </LeftContent>
      <RightContent>
        <button onClick={openNav}>☰</button>
      </RightContent>
    </StyledHeader>
  );
}

export default Header;
