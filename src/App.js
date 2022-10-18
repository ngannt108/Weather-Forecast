import React from "react";
import Search from "./Component/Search/Search";
import "./App.css";
import Content from "./Component/Content/Content";

export default function App() {
  return (
    <div className="main">
      <Search />
      <Content />
    </div>
  );
}
