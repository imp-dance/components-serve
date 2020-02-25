import React, { useRef } from "react";
import "../styles/ImageGallery.css";

export const ImageGallery = props => {
  const ref = useRef(null);
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
  return (
    <div
      {...props}
      className={`${props.className} hu-styled-imageGalleryContainer`}
    >
      <div ref={ref} className="hu-styled-imageGallery">
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
