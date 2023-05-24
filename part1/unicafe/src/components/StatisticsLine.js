const StatisticsLine = (props) => {
  const { text, count } = props;
  return (
    <p>
      {text} {count}
    </p>
  );
};

export default StatisticsLine;
