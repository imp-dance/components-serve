import React from "react";
import SearchableList from "searchable-list-hu-react";
export default {
  title: "Searchable list",
  url: "/searchable-list",
  markdown: `
## Install

    npm i --save searchable-list-hu-react

## Use

    import SearchableList from "searchable-list-hu-react";

    const list = [
        {
            content: "Normal string",
            tags: [],
            key: 1
        },
        {
            content: <strong>React node</strong>,
            tags: ["react", "jsx", "js"],
            key: 2
        },
        {
            content: (
              <span>
                  <i>Nested</i> <u>Separate</u> <b>nodes</b>
              </span>
            ),
            tags: ["nesting"],
            key: 3
        },
        {
            content: (
              <strong>
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    vel leo vitae ipsum efficitur venenatis. Maecenas euismod nisl
                    at mi molestie convallis
                  </i>
              </strong>
            ),
            tags: ["loremipsum", "dummy"],
            key: 4
        }
    ];
    
    const App = () => {
      return (
        <div>
          <SearchableList list={list} />
        </div>
      )
    }


## Props
SearchableList only takes in one prop, **list**, which is an array of objects. The objects should contain the following shape:

> **list: [ {**

>   **content**: React node or string.

>   **tags**: Array of words (strings), works best with one word per string. 

>   **key**: String or number, a unique key.

>   ** * **: All other props are passed on to the container div.

> **} ]**

## Styling

Use the style or className prop to apply styles, or alternatively use this selector: **\`.hu-comp-searchable-list\`** to target the container div.


## How it gets node text recursively

This is the method that is used to search through react elements for searchable text.

    const getRecursiveChildText = reactNode => {
        if (reactNode.props === undefined && reactNode.length > 1) {
            // Multiple children
            let joinedNodes = [];
            reactNode.forEach(node => {
                if (typeof node === "object")
                joinedNodes.push(getRecursiveChildText(node));
            });
            return joinedNodes.join(" ");
        } else if (typeof reactNode.props.children === "string") {
            // Found end of the road
            return reactNode.props.children;
        } else if (typeof reactNode.props.children === "object") {
            // Go down one child
            return getRecursiveChildText(reactNode.props.children);
        } else if (reactNode.props.children === undefined) {
            // Did not find any text nodes
            return ' ';
        }
    };

## Disallowed characters

**\` \\ \`** and **\` + \`** are not allowed, as they will cause regex errors with Javascript's string.search() function. Instead, they will produce a blank space \` \`.
`,
  requires: ["label-inside-input-react"],
  demo: (
    <SearchableList
      list={[
        {
          content: "Normal string",
          tags: [],
          key: 3
        },
        {
          content: <strong>React node</strong>,
          tags: ["react", "jsx", "js"],
          key: 1
        },
        {
          content: (
            <span>
              <i>Nested</i> <u>Separate</u> <strong>nodes</strong>
            </span>
          ),
          tags: ["nesting"],
          key: 2
        },
        {
          content: "Tagged as social networks",
          tags: [
            "google",
            "facebook",
            "tiktok",
            "instagram",
            "youtube",
            "reddit",
            "twitter"
          ],
          key: 5
        },
        {
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vel leo vitae ipsum efficitur venenatis. Maecenas euismod nisl
          at mi molestie convallis`,
          tags: ["nesting"],
          key: 4
        },
        {
          content: <img src="https://picsum.photos/200" alt="Lorem picsum" />,
          tags: ["image", "img", "lorem", "picsum"],
          key: 6
        },
        {
          content: "Type 'image'",
          tags: [],
          key: 8
        },
        {
          content: <img src="https://picsum.photos/199" alt="Lorem picsum" />,
          tags: ["image", "img", "lorem", "picsum"],
          key: 9
        }
      ]}
    />
  )
};
