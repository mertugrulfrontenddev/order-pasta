import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TodoProvider } from "./Context/TodoContext";
import { DessertsProvider } from "./Context/DessertsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DessertsProvider>
    <App />
  </DessertsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
