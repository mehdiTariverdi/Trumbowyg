import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h2>React-Trumbowyg Stateful Example</h2>
    <App />
    <div style={{ textAlign: "center" }}>
      <a class="footer" href="https://github.com/evg1n">
        evg1n
      </a>
      <span> on GitHub</span>
    </div>
  </React.StrictMode>,
  rootElement
);
