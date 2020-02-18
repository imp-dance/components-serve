import React from "react";
import styled from "styled-components";
const StyledSection = styled.section`
  padding: 20px;
`;
export default props => {
  return (
    <StyledSection className="rightSection">{props.children}</StyledSection>
  );
};
