import React, { useEffect } from "react";
import Tag from "../reusable/Tag";
import ReactMarkdown from "react-markdown";
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
      {item.url === "/" && <div></div>}
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
