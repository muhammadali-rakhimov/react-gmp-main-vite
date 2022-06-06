import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@features/Header/Header";
import MoviesSearch from "@features/MoviesSearch";
import MoviesCards from "@features/MoviesCards";
import Footer from "@features/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="container-fluid min-vh-100 d-flex flex-column">
        <div className="container">
          <div className="row">
            <Header />
          </div>
        </div>
        <div className="container">
          <div className="row flex-grow-1">
            <MoviesSearch />
            <MoviesCards />
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
