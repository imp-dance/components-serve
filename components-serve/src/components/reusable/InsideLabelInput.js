import React from "react";
import styled from "styled-components";
const StyledLabel = styled.label`
  display: block;
  position: relative;
  margin: 0 0 5px;
  span {
    transition: all 0.1s ease-out;
    position: absolute;
    top: 1em;
    left: 0.7em;
    font-size: 1em;
    opacity: 0.8;
    user-select: none;
    pointer-events: none;
  }
  input {
    border: 2px solid #eee;
    border-radius: 3px;
    padding: 1.1em 0.5em 0.5em;
    font-size: 1em;
    width: 100%;
    &::placeholder {
      font-size: 0px;
    }
    &:focus,
    &:not(:placeholder-shown) {
      ~ span {
        top: 7px;
        left: 8px;
        font-size: 0.6em;
      }
    }
    &:focus {
      border-color: #575796;
      outline: none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 10em white inset !important;
    }
  }
`;
const InsideLabelInput = props => {
  return (
    <StyledLabel>
      <input placeholder=" " {...props} />
      <span>{props.label || props.placeholder}</span>
    </StyledLabel>
  );
};
export default InsideLabelInput;
