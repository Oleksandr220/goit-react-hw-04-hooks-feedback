import React from "react";
import PropTypes from "prop-types";
import "./FeedBackOptions.css";

const FeedbackOptions = ({ options, changeFeedback }) => {
  return (
    <div className="button__container">
      {options.map((option) => (
        <button
          className="feedback__button"
          onClick={() => changeFeedback(option.toLowerCase())}
          key={option.toString()}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  changeFeedback: PropTypes.func,
  options: PropTypes.node,
};

export default FeedbackOptions;
