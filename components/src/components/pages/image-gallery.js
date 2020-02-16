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
          ]} />
        </div>
      )
    }
## Props

> **images**: An array of image-urls.

> ** * **: All other props are passed on to the container div

## Styling

Use the **style**, **labelStyle**, **className** or **labelClassName** props to apply styles to the input and label.
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
