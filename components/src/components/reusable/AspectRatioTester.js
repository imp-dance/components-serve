import React, { useState } from "react";
import ImageRatioFixer from "image-ratio-fixer-hu-react";
export default () => {
  const [info, setInfo] = useState({
    css: {}
  });
  return (
    <div>
      <ImageRatioFixer
        img="https://liglgo.no/img/screenshot.png"
        ratio={{ width: 250, height: 200 }}
        output={info => setInfo(info)}
        data-test="test"
        style={{
          maxHeight: "300px"
        }}
      />
      <h3>Result</h3>
      <div
        style={{
          position: "relative",
          width: "250px",
          height: "200px",
          overflow: "hidden",
          background: "#ccc"
        }}
      >
        <img src="https://liglgo.no/img/screenshot.png" style={info.css} />
      </div>
    </div>
  );
};
