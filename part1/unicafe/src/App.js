import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveGoodFeedback = () => {
    setGood(good + 1);
  };

  const giveNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const giveBadFeedback = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title={"give feedback"} />
      <Button handleOnclick={giveGoodFeedback} text={"good"} />
      <Button handleOnclick={giveNeutralFeedback} text={"neutral"} />
      <Button handleOnclick={giveBadFeedback} text={"bad"} />
     {good+neutral+bad ?  <Statistics good={good} neutral={neutral}  bad={bad} />  : <p>No feedback given</p>}
    </div>
  );
};

export default App;
