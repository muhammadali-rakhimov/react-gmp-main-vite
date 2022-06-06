import React, { Fragment, useEffect, useState } from "react";
import styled from "./Header.module.scss";
import wallpaper from "@images/header-background.png";
import AddMovie from "@base/AddMovie";
import Search from "@base/Search";
import SearchButton from "@base/SearchButton";
import ErrorBoundary from "@features/ErrorBoundary/ErrorBoundary";

const Header = () => {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.write(Error("Crashed with Error Boundary!"));
      throw new Error("Crashed with Error Boundary!");
    }
  }, [toggle]);

  return (
    <Fragment>
      <nav
        style={{ backgroundImage: `url(${wallpaper})` }}
        className={`${styled.parent} navbar navbar-light p-5`}
      >
        <div className={`container-fluid ${styled.containerHeader}`}>
          <a href="/" className={styled.logo}>
            <b>netflix</b>
            roulette
          </a>
          <AddMovie />
        </div>
        <div className={`${styled.find} col p-5`}>
          <div className="container">
            <h1>FIND YOUR MOVIE</h1>
            <br />
            <div>
              <ErrorBoundary>
                <Search toggle={toggle} setToggle={setToggle} />
              </ErrorBoundary>
              <SearchButton />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
