import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../routes";
import "../styles/App.scss";
const StyledAside = styled.aside`
  background: #fff;
  padding: 0px;
  border-right: 1px solid #ddd;
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
function Aside({ children }) {
  return (
    <StyledAside>
      <StyledNav>
        <StyledUL>
          {routes.map(
            item =>
              item.url !== "/" && (
                <li>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              )
          )}
        </StyledUL>
      </StyledNav>
    </StyledAside>
  );
}

export default Aside;
