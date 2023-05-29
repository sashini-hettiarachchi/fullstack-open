const Total = ({ parts }) => {
  return (
    <h2>
      total of{" "}
      {parts.reduce((prevSum, part) => {
        return prevSum + part.exercises;
      }, 0)}{" "}
      exercises
    </h2>
  );
};

export default Total;
