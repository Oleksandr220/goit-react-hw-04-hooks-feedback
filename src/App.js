import React, { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedBackOptions/FeedBackOptions";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeFeedback = (feedback) => {
    if (feedback === "good") {
      setGood((prevState) => prevState + 1);
    }
    if (feedback === "neutral") {
      setNeutral((prevState) => prevState + 1);
    }
    if (feedback === "bad") {
      setBad((prevState) => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countFeedbackPercentage = () => {
    return Math.ceil((good * 100) / countTotalFeedback());
  };

  const options = ["Good", "Neutral", "Bad"];

  return (
    <div className="feedback__container">
      <h1 className="feedback__title">Feedbacks</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} changeFeedback={changeFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            feedbackPercentage={countFeedbackPercentage()}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </Section>
    </div>
  );
}

export default App;
