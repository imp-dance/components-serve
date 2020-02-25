import React from "react";
import Toggle from "../reusable/Toggle";
export default {
  title: "Toggle",
  url: "/toggle",
  markdown: `
## Install

    npm i --save toggle-hu-react

## Use

    import Toggle from "toggle-hu-react";

    const App = () => {
      const [checked, setChecked] = useState(false);
      return (
        <div>
          <Toggle label={checked ? "Turn off" : "Turn on"} onChange={() => setChecked(!checked)} />
        </div>
      )
    }

## Props

> **label**: String, label

> **onChange**: Method

> ** * **: All other props are passed on to the input node

## Styling

Use the props to apply styles to the input and label, or alternatively use the following selectors.

> **\`.hu-comp-toggle-label\`** : Container <label> element

> **\`.hu-comp-toggle-span\`** : Span wrapping checkbox

> **\`.hu-comp-toggle-check\`** : Checkbox element

> **\`.hu-comp-toggle-check::before\`** : Checkbox background

> **\`.hu-comp-toggle-check::after\`** : Checkbox toggle button

If you want to change the background for when it's checked, just use the \`:checked:before\` and \`:checked:after\` selectors

`,
  requires: [],
  demo: (
    <div>
      <h4>Inline</h4>
      <p>
        Donec a lectus ut eros ultricies rutrum at vel justo.{" "}
        <Toggle
          label="Log state to console."
          onChange={event => console.log(event.target.checked)}
        />{" "}
        Sed ante ipsum, venenatis quis elementum quis, tempus eu mauris. Morbi
        nec pharetra turpis
      </p>
      <h4>By itself</h4>
      <p>
        <Toggle
          label="Log state to console."
          onChange={event => console.log(event.target.checked)}
        />
      </p>
    </div>
  )
};
