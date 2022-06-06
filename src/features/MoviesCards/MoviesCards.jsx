import React from "react";
import styled from "./styles.module.scss";
import ResultCount from "@base/ResultCount/ResultCount";
import MoviesCard from "./components/MoviesCard/MoviesCard";
import card1 from "@images/card1.png";
import card2 from "@images/card2.png";
import card3 from "@images/card3.png";
import card4 from "@images/card4.png";
import card5 from "@images/card5.png";
import card6 from "@images/card6.png";

const MoviesCards = () => {
  return (
    <div className={`${styled.parent} pt-4`}>
      <div className="px-5">
        <ResultCount number={39} />
      </div>
      <div className="d-flex">
        <div className="col-12">
          <div className="row mb-5 mt-2">
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card1}
                name={"Pulp Fiction"}
                type={"Action & Adventure"}
                year={2004}
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card2}
                name={"Bohemian Rhapsody"}
                type={"Drama, Biography, Music"}
                year={2003}
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card3}
                name={"Kill Bill: Vol 2"}
                type={"Oscar winning Movie"}
                year={1994}
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card4}
                name={"Avengers: War of Infinity"}
                type={"Action & Adventure"}
                year={2004}
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card5}
                name={"Inception"}
                type={"Action & Adventure"}
                year={2003}
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card6}
                name={"Reservoir dogs"}
                type={"Oscar winning Movie"}
                year={1994}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCards;
