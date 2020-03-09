import React, { useState } from "react";
import "../styles/Toggle.css";

export default props => {
  const [checked, setChecked] = useState(false);
  const click = event => {
    setChecked(!checked);
    typeof props.onChange === "function" && props.onChange(event);
  };
  return (
    <label className="hu-comp-toggle-label">
      <span className="hu-comp-toggle-span">
        <input
          type="checkbox"
          className="hu-comp-toggle-check"
          {...props}
          onChange={click}
          checked={checked}
        />
      </span>
      {props.label || ""}
    </label>
  );
};
