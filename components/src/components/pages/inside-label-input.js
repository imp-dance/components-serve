import React from "react";
import InsideLabelInput from "../reusable/InsideLabelInput";
export default {
  title: "Inside Label Input",
  markdown: `
## Source
### InsideLabelInput.scss
You need node-sass or styled-components to parse this SCSS.

    .insideLabelInput{
      font-family:sans-serif;
      display:block;
      position:relative;
      margin:0 0 5px;
      span{
        transition:all .1s ease-out;
        position:absolute;
        top:1em;
        left:0.7em;
        font-size:1em;
        opacity:.8;
        user-select:none;
        pointer-events:none;
      }
      input{
        border:2px solid #eee;
        border-radius:3px;
        padding:1.1em .5em .7em;
        font-size:1em;
        width:100%;
        &::placeholder {
          font-size: 0px;
        }
        &:focus, &:not(:placeholder-shown){
          ~ span {
            top:7px;
            left:8px;
            font-size:.6em;
          }
        }
        &:focus{
          border-color:#575796;
          outline:none;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus, 
        &:-webkit-autofill:active  {
            -webkit-box-shadow: 0 0 0 10em white inset !important;
        }
      }
    }

### HTML
Needs atleast a space as placeholder

    <label class="insideLabelInput">
      <input type="text" placeholder="Label" />
      <span>Label</span> 
    </label> <!---->
    
`,
  requires: ["node-sass"],
  demo: <InsideLabelInput type="text" placeholder="Type whatever you want" />
};
