import React from "react";
import styled from "styled-components";
import "../styles/App.scss";
const StyledTag = styled.span`
  display: inline-block;
  background: #575796;
  padding: 3px 5px;
  font-size: 0.9em;
  color: #f9f9f9;
  border-radius: 2px;
  margin: 0 5px 0 0;
  a {
    color: #f9f9f9;
    text-decoration: none;
  }
`;
function Tag({ children }) {
  return (
    <StyledTag>
      <a
        href={`https://www.npmjs.com/package/${children}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </StyledTag>
  );
}

export default Tag;
