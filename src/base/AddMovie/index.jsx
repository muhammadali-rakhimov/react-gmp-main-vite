import React from "react";
import styled from "./style.module.scss";

function index() {
  return <button className={`${styled.addMovie} p-2`}>+ ADD MOVIE</button>;
}

export default index;
