import React, { useRef, useState } from "react";
import "../styles/ImageGallery.css";

export const ImageGallery = props => {
  const ref = useRef(null);
  const [dragState, setDragState] = useState({
    isDown: false,
    startX: null,
    scrollLeft: null
  });
  const images = props.images;
  let imageArray = [];
  const onClick = url => {
    if (props.noOpen) {
    } else {
      window.open(url, "_blank");
    }
  };
  for (let [key, value] of Object.entries(images)) {
    imageArray.push(
      <div ref={ref} key={key} className="hu-styled-imageGalleryEntry">
        <img
          src={value}
          alt={"#" + key}
          onClick={onClick.bind(null, value)}
          style={props.noOpen ? {} : { cursor: "pointer" }}
        />
      </div>
    );
  }
  const scrollRight = () => {
    let target = ref.current;
    let section = target.scrollWidth / imageArray.length;
    if (props.hardScroll) {
      target.scrollLeft = target.scrollLeft - section;
    } else {
      target.scrollTo({
        top: 0,
        left: target.scrollLeft + section,
        behavior: "smooth"
      });
    }
  };
  const scrollLeft = () => {
    let target = ref.current;
    let section = target.scrollWidth / imageArray.length;
    if (props.hardScroll) {
      target.scrollLeft = target.scrollLeft - section;
    } else {
      target.scrollTo({
        top: 0,
        left: target.scrollLeft - section,
        behavior: "smooth"
      });
    }
  };
  const mouseDown = e => {
    const target = ref.current;
    setDragState({
      ...dragState,
      isDown: true,
      startX: e.pageX - target.offsetLeft,
      scrollLeft: target.scrollLeft
    });
  };
  const mouseLeaveUp = () => {
    setDragState({ ...dragState, isDown: false });
  };
  const mouseMove = e => {
    if (!dragState.isDown) return;
    if (props.draggable !== undefined && props.draggable === false) return;
    e.preventDefault();
    const target = ref.current;
    const x = e.pageX - target.offsetLeft;
    const walk = x - dragState.startX; //scroll-fast
    target.scrollLeft = dragState.scrollLeft - walk;
    console.log(walk);
  };

  return (
    <div
      {...props}
      className={`${props.className} hu-styled-imageGalleryContainer`}
    >
      <div
        ref={ref}
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeaveUp}
        onMouseUp={mouseLeaveUp}
        onMouseMove={mouseMove}
        className="hu-styled-imageGallery"
      >
        <button
          className="hu-comp-img-gal-left"
          onClick={scrollLeft}
          type="round"
          fontIcon=" "
        >
          &#8249;
        </button>
        <button
          className="hu-comp-img-gal-right"
          onClick={scrollRight}
          type="round"
          fontIcon=" "
        >
          &#8250;
        </button>
        {imageArray}
      </div>
    </div>
  );
};
export default ImageGallery;
