import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/AspectRatioForcer.css";
const AspectRatioForcer = props => {
  const { img, ratio, className, output, liveUpdate } = props;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [relPos, setRelPos] = useState({ top: 0, left: 0 });
  // const [isSet, doSet] = useState(false);
  const [isDragging, setDragging] = useState(false);
  const [imgDragging, setImgDragging] = useState(false);
  const [imgStartPos, setImgStartPos] = useState({ x: 0, y: 0 });
  const [imgPos, setImgPos] = useState({ left: 0, top: 0 });
  const [lastImgPos, setLastImgPos] = useState({ left: 0, top: 0 });
  const [containerDim, setContainerDim] = useState({ w: 0, h: 0 });
  const [scale, setScale] = useState(1);
  const [imgDim, setImgDim] = useState(null);
  const ratioFixer = useRef(null);
  const imgRef = useRef(null);
  const style = {
    "--ARFwidth": ratio.width + "px",
    "--ARFheight": ratio.height + "px"
  };
  const pointerDown = (event, fortype) => {
    fortype === "ratio" && ratioFixer.current.focus();
    if (event.button !== 0) return;
    const container = event.target.parentElement;
    const parentBound = container.getBoundingClientRect();
    setContainerDim({
      w: container.offsetWidth - ratio.width,
      h: container.offsetHeight - ratio.height
    });
    setRelPos({
      top: parentBound.top + window.scrollY,
      left: parentBound.left + window.scrollX,
      parentTop: parentBound.top,
      parentLeft: parentBound.left
    });
    fortype === "ratio" && setDragging(true);
    if (fortype === "img") {
      setImgDragging(true);
      setImgStartPos({ x: event.pageX, y: event.pageY });
    }
    event.stopPropagation();
    event.preventDefault();
  };
  const pointerMove = event => {
    if (!isDragging && !imgDragging) return;
    if (isDragging) {
      const padding = 55;
      let x = event.pageX - relPos.left - padding;
      let y = event.pageY - relPos.top - padding;
      if (x <= 0) {
        x = 0;
      }
      if (y <= 0) {
        y = 0;
      }
      if (x > containerDim.w) {
        x = containerDim.w;
      }
      if (y > containerDim.h) {
        y = containerDim.h;
      }
      setPos({
        x,
        y
      });
    }
    if (imgDragging) {
      let x = event.pageX - imgStartPos.x;
      let y = event.pageY - imgStartPos.y;
      setImgPos({
        left: lastImgPos.left + x,
        top: lastImgPos.top + y
      });
    }
    event.stopPropagation();
    event.preventDefault();
  };
  const stopDrag = () => {
    setDragging(false);
    if (imgDragging) setLastImgPos({ left: imgPos.left, top: imgPos.top });
    setImgDragging(false);
  };
  const keyDown = event => {
    const key = event.key;
    let localPos = pos;
    console.log(localPos);
    if (key === "ArrowLeft") {
      localPos.x -= 1;
    }
    if (key === "ArrowRight") {
      localPos.x += 1;
    }
    if (key === "ArrowUp") {
      localPos.y -= 1;
    }
    if (key === "ArrowDown") {
      localPos.y += 1;
    }
    console.log(localPos);
    setPos(localPos);
    sendData();
    event.stopPropagation();
    event.preventDefault();
  };
  const sendData = () => {
    stopDrag();
    const bounds = ratioFixer.current.getBoundingClientRect();
    const parentBounds = ratioFixer.current.parentElement.getBoundingClientRect();
    const xData = bounds.left - parentBounds.left;
    const yData = bounds.top - parentBounds.top;
    const data = {
      transformX: -Math.abs(xData),
      transformY: -Math.abs(yData),
      x: imgPos.top,
      y: imgPos.left,
      scale,
      css: {
        transform: `translate(-${xData}px, -${yData}px) scale(${scale})`,
        position: "absolute",
        top: `${imgPos.top}px`,
        left: `${imgPos.left}px`
      }
    };
    typeof output === "function" && output(data);
  };
  let filteredProps = {};
  Object.keys(props).forEach(item => {
    if (!["ratio", "output", "img"].includes(item))
      filteredProps[item] = props[item];
  });
  return (
    <div
      {...filteredProps}
      className={`${className || ""} hu-comp-image-ar-forcer`}
      style={{ ...props.style, ...style }}
      onPointerMove={pointerMove}
      onPointerCancel={stopDrag}
      onPointerUp={sendData}
      onPointerOut={stopDrag}
    >
      <img
        src={img}
        alt={`Change aspect ratio`}
        style={{
          transform: `scale(${scale})`,
          height: imgDim === null ? "auto" : imgDim.h + "px",
          width: imgDim === null ? "auto" : imgDim.w + "px",
          top: imgPos.top + "px",
          left: imgPos.left + "px"
        }}
        ref={imgRef}
        onLoad={() =>
          setImgDim({ w: imgRef.current.width, h: imgRef.current.height })
        }
        onPointerDown={e => pointerDown(e, "img")}
      />
      <div
        className={`hu-comp-ratio ${isDragging && "active"}`}
        onPointerDown={e => pointerDown(e, "ratio")}
        style={{ left: pos.x + "px", top: pos.y + "px" }}
        ref={ratioFixer}
        tabIndex="0"
        onKeyDown={keyDown}
      ></div>
      <input
        type="range"
        min="0"
        max="3"
        value={scale}
        step="0.025"
        onKeyDown={sendData}
        onChange={event => setScale(event.target.value)}
      />
    </div>
  );
};
AspectRatioForcer.propTypes = {
  img: PropTypes.string,
  ratio: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};
export default AspectRatioForcer;
