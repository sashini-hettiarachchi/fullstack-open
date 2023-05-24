import Header from "./Header";
import Stat from "./Stat";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad || 0;
  const avg = (good * 1 + neutral * 0 + bad * -1) / total || 0;
  const positivePer = (good / total) * 100 || 0;
  return (
    <p>
      <Header title={"statistics"} />
      <Stat text={"good"} count={good} />
      <Stat text={"neutral"} count={neutral} />
      <Stat text={"bad"} count={bad} />
      <Stat text={"all"} count={total} />
      <Stat text={"average"} count={avg} />
      <Stat text={"positive"} count={`${positivePer}%`} />
    </p>
  );
};

export default Statistics;
