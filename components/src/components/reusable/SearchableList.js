import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "label-inside-input-react";
import "../styles/SearchableList.css";
const searchNode = (item, q) => {
  let matches = 0;
  let searchableText;
  if (typeof item.content === "object") {
    searchableText = getRecursiveChildText(item.content);
  } else if (typeof item.content === "string") {
    searchableText = item.content;
  }
  console.log(searchableText);
  console.log("--------------------");
  const arrayOfWordsToSearch = searchableText.split(" ");
  const arrayOfQWords = q.trim().split(" ");
  if (!searchableText) {
    throw "Something went wrong with SearchableList...";
  } else {
    arrayOfWordsToSearch.forEach(word => {
      arrayOfQWords.forEach(qWord => {
        if (qWord !== "") {
          if (word.toUpperCase().search(qWord.toUpperCase()) >= 0) {
            matches++;
          }
        } else {
          matches++;
        }
      });
    });
    if (item.tags.length > 0) {
      item.tags.forEach(word => {
        arrayOfQWords.forEach(qWord => {
          if (qWord !== "") {
            if (word.toUpperCase().search(qWord.toUpperCase()) >= 0) {
              matches++;
            }
          } else {
            matches++;
          }
        });
      });
    }
  }
  return matches >= arrayOfQWords.length;
};
const getRecursiveChildText = reactNode => {
  if (reactNode.props === undefined && reactNode.length > 1) {
    let joinedNodes = [];
    reactNode.forEach(node => {
      if (typeof node === "object")
        joinedNodes.push(getRecursiveChildText(node));
    });
    return joinedNodes.join(" ");
  } else if (typeof reactNode.props.children === "string") {
    return reactNode.props.children;
  } else if (typeof reactNode.props.children === "object") {
    return getRecursiveChildText(reactNode.props.children);
  } else if (reactNode.props.children === undefined) {
    return " ";
  }
};
const SearchableList = props => {
  const { list, className } = props;
  const [q, setQ] = useState("");
  return (
    <div {...props} className={`${className || ""} hu-comp-searchable-list`}>
      <Input
        type="text"
        placeholder="Search"
        value={q}
        onChange={e => {
          setQ(e.target.value);
        }}
      />
      <ul>
        {list.map(item => (
          <React.Fragment key={item.key}>
            {q.trim() === "" || searchNode(item, q) ? (
              <li data-tags={item.tags}>{item.content}</li>
            ) : (
              <></>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
SearchableList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      tags: PropTypes.arrayOf(PropTypes.string),
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  )
};
SearchableList.defaultProps = {
  list: [{ content: "", tags: [], key: "uniqey4hucomplist-default" }]
};
export default SearchableList;
