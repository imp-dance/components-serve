import React from "react";
import ImageGallery from "image-gallery-hu-react";
export default {
  title: "Image gallery",
  url: "/image-gallery",
  markdown: `
## Install

    npm install --save image-gallery-hu-react

## Use

    import ImageGallery from "image-gallery-hu-react";

    const App = () => {
      return (
        <div>
          <ImageGallery images={[
            "https://picsum.photos/690",
            "https://picsum.photos/700", 
            "https://picsum.photos/680"
          ]}
          style={{
            width: "400px"
          }} />
        </div>
      )
    }
## Props

> **images**: An array of image-urls.

> ** * **: All other props are passed on to the container div

## Styling

You can use the style prop to target the container div, or use the following selectors to target the elements:

> **\`.hu-styled-imageGalleryContainer\`** : Used for width, layout & positioning styles.

> **\`hu-comp-img-gal-left\`** / **\`hu-comp-img-gal-right\`** : The buttons

> **\`hu-styled-imageGalleryEntry\`** : Div wrapper for each image

`,
  requires: [],
  demo: (
    <ImageGallery
      images={[
        "https://picsum.photos/690",
        "https://picsum.photos/700",
        "https://picsum.photos/680"
      ]}
      style={{ width: "400px", maxWidth: "90%" }}
    />
  )
};
