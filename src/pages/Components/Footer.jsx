import React from "react";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`container-fluid ${styled.containerFooter} p-4`}>
      <a href="/" className={styled.logo}>
        <b>netflix</b>
        roulette
      </a>
    </div>
  );
};

export default Footer;
