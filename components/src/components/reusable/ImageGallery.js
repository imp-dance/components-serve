import React, { useRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #000 !important;
  border-color: #000 !important;
  font-size: 1.5em;
  border: 2px solid #08415c;
  outline: none;
  background-color: #08415c;
  border-radius: 50%;
  color: #fff;
  padding: 4px 8px 7px 9px;
  font-size: 0.9em;
  overflow: hidden !important;
  position: relative !important;
  grid-template-rows: 1fr;
  margin-right: 2px;
  cursor: pointer;
  font-size: 1em;
  width: calc(1em + 1em);
  height: calc(1em + 1em);
  line-height: 1em;
  text-align: center;
`;

const StyledImageGallery = styled.div`
  display: flex;
  align-content: center;
  scroll-snap-type: x mandatory;
  align-items: center;
  overflow-x: auto;
  background: #222;
  > button {
    position: absolute !important;
    background: #000 !important;
    border-color: #000 !important;
    font-size: 1.5em;
  }
  > .hu-comp-img-gal-right {
    right: 10px;
  }
  > .hu-comp-img-gal-left {
    left: 10px;
  }
`;
const StyledImageGalleryContainer = styled.div`
  position: relative;
`;
const StyledImageEntry = styled.div`
  display: block;
  scroll-snap-align: start;
  flex: 0 0 100% !important;
  width: 100%;
  text-align: center;
  > img {
    max-width: 100%;
    cursor: pointer;
  }
`;
export const ImageGallery = props => {
  const ref = useRef(null);
  const images = props.images;
  let imageArray = [];
  for (let [key, value] of Object.entries(images)) {
    imageArray.push(
      <StyledImageEntry ref={ref} key={key}>
        <img src={value} alt={"#" + key} />
      </StyledImageEntry>
    );
  }
  const scrollRight = () => {
    let target = ref.current;
    let section = target.scrollWidth / imageArray.length;
    target.scrollLeft = target.scrollLeft + section;
  };
  const scrollLeft = () => {
    let target = ref.current;
    let section = target.scrollWidth / imageArray.length;
    target.scrollLeft = target.scrollLeft - section;
  };
  return (
    <StyledImageGalleryContainer {...props}>
      <StyledImageGallery ref={ref}>
        <Button
          className="hu-comp-img-gal-left"
          onClick={scrollLeft}
          type="round"
          fontIcon=" "
        >
          &#8249;
        </Button>
        <Button
          className="hu-comp-img-gal-right"
          onClick={scrollRight}
          type="round"
          fontIcon=" "
        >
          &#8250;
        </Button>
        {imageArray}
      </StyledImageGallery>
    </StyledImageGalleryContainer>
  );
};
export default ImageGallery;
