import React, { useEffect } from "react";
import Tag from "../reusable/Tag";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import routes from "../../routes";
import SearchableList from "searchable-list-hu-react";
import hljs from "highlight.js";
import "../styles/App.scss";
function Template({ item }) {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
      const lines = block.innerHTML.split("\n");
      const newLines = [];
      lines.forEach(line => {
        newLines.push(`<div class="code-line"> ${line}</div>`);
      });
      block.innerHTML = newLines.join("\n");
    });
  }, [item]);
  const listedRoutes = [];
  routes.forEach((route, index) => {
    if (route.url !== "/")
      listedRoutes.push({
        content: (
          <Link to={route.url} className="frontPageLink">
            {route.title}
          </Link>
        ),
        tags: [],
        key: `${route.url}--${index}`
      });
  });
  return (
    <article>
      <header>
        <h1>{item.title}</h1>
        {item.requires.length > 0 && (
          <div className="requires">
            <h2>Dependencies</h2>
            {item.requires.map(item => (
              <Tag>{item}</Tag>
            ))}
          </div>
        )}
      </header>
      <Demo item={item} />
      <ReactMarkdown source={item.markdown} />
      {item.url === "/" && (
        <div>
          <SearchableList list={listedRoutes} />
        </div>
      )}
    </article>
  );
}
export const Demo = ({ item }) => {
  return (
    <>
      {item.demo !== null && (
        <div className="demo">
          <h2>Demo</h2>
          {item.demo}
        </div>
      )}
    </>
  );
};

export default Template;
