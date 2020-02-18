import React from "react";
import styled from "styled-components";
const StyledSection = styled.section`
  padding: 20px;
`;
const OverflowChecker = styled.div`
  max-height: calc(100vh);
  overflow-y: auto;
  position: sticky;
  top: 0;
`;
export default props => {
  return (
    <StyledSection className="rightSection">
      <OverflowChecker>{props.children}</OverflowChecker>
    </StyledSection>
  );
};
