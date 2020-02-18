import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../routes";
import "../styles/App.scss";
const StyledAside = styled.aside`
  background: #fff;
  padding: 0px;
  border-right: 1px solid #ddd;
  nav {
    a {
      background: transparent;
      font-family: inherit;
      border: none;
      font-weight: bold;
      cursor: pointer;
      font-size: 1em;
      display: block;
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #ddd;
      padding: 15px 20px;
      color: inherit;
      text-decoration: none;
      &:hover {
        background: #f9f9f9;
      }
    }
  }
`;
const StyledUL = styled.ul`
  padding: 0;
  margin: 0 0 10px;
  list-style: none;
`;
const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
`;
function Aside({ open, closeNav }) {
  return (
    <StyledAside className={open ? "open" : ""}>
      <StyledNav>
        <StyledUL>
          {open && (
            <li>
              <Link to="/" onClick={closeNav} className="hideWhenLarge">
                Home
              </Link>
            </li>
          )}
          {routes.map(
            item =>
              item.url !== "/" && (
                <li key={`route-aside-${item.url}`}>
                  <Link
                    to={item.url}
                    key={item.title + "-link"}
                    onClick={closeNav}
                  >
                    {item.title}
                  </Link>
                </li>
              )
          )}
          {open && (
            <li>
              <a href="#" onClick={closeNav} className="hideWhenLarge">
                Close
              </a>
            </li>
          )}
        </StyledUL>
      </StyledNav>
    </StyledAside>
  );
}

export default Aside;
