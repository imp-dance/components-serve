import React, { useEffect } from "react";
import Tag from "../reusable/Tag";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import "../styles/App.scss";
function Article({ item }) {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
      const lines = block.innerHTML.split("\n");
      const newLines = [];
      lines.forEach(line => {
        newLines.push(`<div class="code-line">${line}</div>`);
      });
      block.innerHTML = newLines.join("\n");
    });
  }, [item]);
  return (
    <article>
      <header>
        <h1>{item.title}</h1>
        <div className="requires">
          <h2>Requires</h2>
          {item.requires.map(item => (
            <Tag>{item}</Tag>
          ))}
        </div>
      </header>
      <h2>Demo</h2>
      {item.demo}
      <ReactMarkdown source={item.markdown} />
    </article>
  );
}

export default Article;
