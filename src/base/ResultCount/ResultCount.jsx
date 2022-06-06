import React from "react";
import style from "./style.module.scss";
import PropTypes from "prop-types";

function ResultCount({ number }) {
  return (
    <p className={style.resultCount}>
      <b>{number}</b> movies found
    </p>
  );
}

ResultCount.propTypes = {
  number: PropTypes.number
}

export default ResultCount;
