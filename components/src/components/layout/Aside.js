import React from "react";
import styled from "styled-components";
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
const ListButton = styled.button`
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
  &:hover {
    background: #f9f9f9;
  }
`;
function Aside({ children }) {
  const open = item => {
    console.log(item);
  };
  return (
    <StyledAside>
      <nav>
        <StyledUL>
          {routes.map(item => (
            <li>
              <ListButton onClick={open.bind(null, item)}>
                {item.title}
              </ListButton>
            </li>
          ))}
        </StyledUL>
      </nav>
    </StyledAside>
  );
}

export default Aside;
