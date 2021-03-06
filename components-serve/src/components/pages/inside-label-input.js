import React from "react";
import InsideLabelInput from "label-inside-input-react";
export default {
  title: "Label inside input",
  url: "/label-inside-input",
  markdown: `
## Install

    npm i --save label-inside-input-react

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

Use the props to apply styles to the input and label, or alternatively use this selector: **\`.hu-comp-label-inside-input\`** to target the container div.
`,
  requires: [],
  demo: <InsideLabelInput type="text" placeholder="Type whatever you want" />
};
