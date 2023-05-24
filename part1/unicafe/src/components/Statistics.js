import Header from "./Header";
import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad || 0;
  const avg = (good * 1 + neutral * 0 + bad * -1) / total || 0;
  const positivePer = (good / total) * 100 || 0;
  return (
    <>
      <Header title={"statistics"} />
      <table className="statTable">
        <tbody>
          <tr>
            <td>{"good"}</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>{"neutral"}</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>{"bad"}</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>{"all"}</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>{"average"}</td>
            <td>{avg}</td>
          </tr>
          <tr>
            <td>{"positive"}</td>
            <td>{`${positivePer}%`}</td>
          </tr>
        </tbody>
      </table>
      {/* <StatisticsLine text={"good"} count={good} />
      <StatisticsLine text={"neutral"} count={neutral} />
      <StatisticsLine text={"bad"} count={bad} />
      <StatisticsLine text={"all"} count={total} />
      <StatisticsLine text={"average"} count={avg} />
      <StatisticsLine text={"positive"} count={`${positivePer}%`} /> */}
    </>
  );
};

export default Statistics;
