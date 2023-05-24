import Header from "./Header";
import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad || 0;
  const avg = (good * 1 + neutral * 0 + bad * -1) / total || 0;
  const positivePer = (good / total) * 100 || 0;
  return (
    <p>
      <Header title={"statistics"} />
      <StatisticsLine text={"good"} count={good} />
      <StatisticsLine text={"neutral"} count={neutral} />
      <StatisticsLine text={"bad"} count={bad} />
      <StatisticsLine text={"all"} count={total} />
      <StatisticsLine text={"average"} count={avg} />
      <StatisticsLine text={"positive"} count={`${positivePer}%`} />
    </p>
  );
};

export default Statistics;
