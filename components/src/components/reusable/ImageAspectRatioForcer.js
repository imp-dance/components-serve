import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "../styles/AspectRatioForcer.css";
const AspectRatioForcer = props => {
  const { img, ratio, className, output } = props;
  const [containerPosition, setContainerPosition] = useState({
    top: 0,
    left: 0
  });
  const [containerWH, setContainerWH] = useState({ w: 0, h: 0 });
  // Selection / ratio box
  const ratioBoxRef = useRef(null);
  const [isDraggingRatioBox, setIsDraggingRatioBox] = useState(false);
  const [ratioStartMouseCord, setRatioStartMouseCord] = useState({
    x: 0,
    y: 0
  });
  const [ratioPosition, setRatioPosition] = useState({ x: 0, y: 0 });
  // Image
  const imgRef = useRef(null);
  const [imgWH, setImgWH] = useState(null);
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const [imgClickStartCord, setImgClickStartCord] = useState({ x: 0, y: 0 });
  const [previousPositionOutput, setPreviousPositionOutput] = useState({
    left: 0,
    top: 0
  });
  const [positionOutput, setPositionOutput] = useState({ left: 0, top: 0 });
  // Scale
  const [scale, setScale] = useState(1);
  ////
  const style = {
    "--ARFwidth": ratio.width + "px",
    "--ARFheight": ratio.height + "px"
  };
  const pointerDown = (event, elementClicked) => {
    elementClicked === "ratio" && ratioBoxRef.current.focus();
    if (event.button !== 0) return; // not a left click
    const container = event.target.parentElement;
    const newContainerPosition = container.getBoundingClientRect();
    setContainerWH({
      w: container.offsetWidth - ratio.width,
      h: container.offsetHeight - ratio.height
    });
    setContainerPosition({
      top: newContainerPosition.top + window.scrollY,
      left: newContainerPosition.left + window.scrollX
    });
    if (elementClicked === "ratio") {
      setIsDraggingRatioBox(true);
      const ratioBounds = ratioBoxRef.current.getBoundingClientRect();
      setRatioStartMouseCord({
        x: event.pageX - (ratioBounds.left + window.scrollX),
        y: event.pageY - (ratioBounds.top + window.scrollY)
      });
    }
    if (elementClicked === "img") {
      if (event.target.tagName === "INPUT") return;
      setIsDraggingImage(true);
      setImgClickStartCord({ x: event.pageX, y: event.pageY });
    }
    event.stopPropagation();
    event.preventDefault();
  };
  const pointerMove = event => {
    if (!isDraggingRatioBox && !isDraggingImage) return;
    if (isDraggingRatioBox) {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      let x = mouseX - containerPosition.left - ratioStartMouseCord.x;
      let y = mouseY - containerPosition.top - ratioStartMouseCord.y;
      /*
        Ex:
        
        x = 1200 - 1120 - 55 = 25 = x
        y = 600 - 320 - 55 = 225 = y
        
      */
      if (x <= 0) {
        x = 0;
      }
      if (y <= 0) {
        y = 0;
      }
      if (x > containerWH.w) {
        x = containerWH.w;
      }
      if (y > containerWH.h) {
        y = containerWH.h;
      }
      setRatioPosition({
        x,
        y
      });
    }
    if (isDraggingImage) {
      let x = event.pageX - imgClickStartCord.x;
      let y = event.pageY - imgClickStartCord.y;
      setPositionOutput({
        left: previousPositionOutput.left + x,
        top: previousPositionOutput.top + y
      });
    }
    event.stopPropagation();
    event.preventDefault();
  };
  const stopDrag = () => {
    setIsDraggingRatioBox(false);
    if (isDraggingImage)
      setPreviousPositionOutput({
        left: positionOutput.left,
        top: positionOutput.top
      });
    setIsDraggingImage(false);
  };
  const keyDown = event => {
    const key = event.key;
    let localPos = ratioPosition;
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
    setRatioPosition(localPos);
    sendData();
    event.stopPropagation();
    event.preventDefault();
  };
  const sendData = () => {
    stopDrag();
    const bounds = ratioBoxRef.current.getBoundingClientRect();
    const parentBounds = ratioBoxRef.current.parentElement.getBoundingClientRect();
    const ratioBorder = 2;
    const transformXData = bounds.left - parentBounds.left + ratioBorder;
    const transformYData = bounds.top - parentBounds.top + ratioBorder;
    const data = {
      transformX: -Math.abs(transformXData),
      transformY: -Math.abs(transformYData),
      x: positionOutput.top,
      y: positionOutput.left,
      scale,
      css: {
        transform: `translate(-${transformXData}px, -${transformYData}px) scale(${scale})`,
        position: "absolute",
        top: `${positionOutput.top}px`,
        left: `${positionOutput.left}px`
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
      onPointerDown={e => pointerDown(e, "img")}
    >
      <div className="hu-comp-image-ar-bg"></div>
      <img
        src={img}
        alt={`Change aspect ratio`}
        style={{
          transform: `scale(${scale})`,
          height: imgWH === null ? "auto" : imgWH.h + "px",
          width: imgWH === null ? "auto" : imgWH.w + "px",
          top: positionOutput.top + "px",
          left: positionOutput.left + "px"
        }}
        ref={imgRef}
        onLoad={() =>
          setImgWH({ w: imgRef.current.width, h: imgRef.current.height })
        }
        onPointerDown={e => pointerDown(e, "img")}
      />
      <div
        className={`hu-comp-ratio ${isDraggingRatioBox && "active"}`}
        onPointerDown={e => pointerDown(e, "ratio")}
        style={{ left: ratioPosition.x + "px", top: ratioPosition.y + "px" }}
        ref={ratioBoxRef}
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
    height: PropTypes.number,
    output: PropTypes.func
  })
};
export default AspectRatioForcer;
