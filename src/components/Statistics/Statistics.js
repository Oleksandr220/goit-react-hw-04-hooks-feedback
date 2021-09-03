import React from 'module';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, feedbackPercentage }) => {
  return (
    <div className="statistics__list">
      <p className="statistics__list-item">Good : {good}</p>
      <p className="statistics__list-item">Neutral : {neutral}</p>
      <p className="statistics__list-item">Bad : {bad}</p>
      <p className="statistics__list-item">Total : {total}</p>
      <p className="statistics__list-item">
        Positive feedback : {feedbackPercentage}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
