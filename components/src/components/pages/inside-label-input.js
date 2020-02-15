import React from "react";
import InsideLabelInput from "../reusable/InsideLabelInput";
export default {
  title: "Label inside input",
  url: "/label-inside-input",
  markdown: `
## Install

    npm install --save label-inside-input-react

## Use

    import LabelInput from "label-inside-input-react";

    const App = () => {
      return (
        <div>
          <LabelInput type="email" placeholder="Email" />
        </div>
      )
    }

## Props

> **labelStyle**: React style object

> **labelClassName**: String, classname

> **placeholder/label**: String, label/placeholder

> ** * **: All other props are passed on to the input node

## Styling

Use the **style**, **labelStyle**, **className** or **labelClassName** props to apply styles to the input and label.
`,
  requires: ["styled-components"],
  demo: <InsideLabelInput type="text" placeholder="Type whatever you want" />
};
