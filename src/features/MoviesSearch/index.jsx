import React, { useState } from "react";
import styled from "./styles.module.scss";

const Main = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styled.parent}`}>
      <nav className={`${styled.navbar} navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  All
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DOCUMENTARY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  COMEDY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HORROR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CRIME
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <p>SORT BY</p>
              <button className="btn btn-outline-light" type="submit">
                RELEASE DATE
              </button>
            </form>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Main;
