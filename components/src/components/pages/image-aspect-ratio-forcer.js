import React from "react";
import AspectRatioForcer from "../reusable/ImageAspectRatioForcer";
import AspectRatioTester from "../reusable/AspectRatioTester";
export default {
  title: "Image ratio fixer",
  url: "/image-ratio-fixer",
  markdown: `
## Install

    npm i --save image-ratio-fixer-hu-react

## Use

    import ImageRatioFixer from "image-ratio-fixer-hu-react";
    const [info, setInfo] = useState({
      top: null, // number
      left: null, // number
      scale: null, // number
      css: null // object
    });
    const App = () => {
      return (
        <div>
          <ImageRatioFixer
            img="https://picsum.photos/600"
            ratio={{ width: 250, height: 200 }}
            output={(info) => setInfo(info)}
          />
        </div>
      )
    }

## Output

The output prop expects a function that will take 
an object and set it to state, as seen in the demo code above. The object contains the following keys:

> **top**: Float/Int, how many pixels from the top the selection is.

> **left**: Float/Int, how many pixels from the left the selection is.

> **scale**: Float/Int, value of scale (1 = 100%)

> **css**: Object, contains CSS that you can put on an img if it has a container with \`position:relative;\` and \`overflow:hidden;\`

The easiest way to use the output is to have a wrapper div with \`position:relative;\` and \`overflow:hidden;\` around an \`img\` tag. 
The \`img\` tag should then use \`css\` from the output object on its style attribute.

## Props

> **img**: String, image-url

> **ratio**: Object, \`width\` and \`height\` of the ratio fixer, as numbers

> **output**: Function, callback function for handling output

> ** * **: All other props are passed on to the input node

## Styling

Use the style prop to apply styles to the container div, or alternatively use the following selectors.

> **\`.hu-comp-image-ar-forcer\`** : Container <div> element

> **\`.hu-comp-ratio\`** : Ratio box


`,
  requires: [],
  demo: <AspectRatioTester />
};
