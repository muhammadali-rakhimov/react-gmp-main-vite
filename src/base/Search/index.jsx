import React from "react";
import styled from "./style.module.scss"

function index({ toggle, setToggle }) {
  return (
    <input
      type="text"
      className={`${styled.search} col col-md-9 p-3`}
      placeholder="What do you want to watch?"
      onChange={(e) => setInput(e.target.value)}
      onClick={() => setToggle(true)}
    />
  );
}

export default index;
