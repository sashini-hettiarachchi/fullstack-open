const Total = ({props}) => {
  return (
    <p>
      Number of exercises{" "}
      {props[0].exercises + props[1].exercises + props[2].exercises}
    </p>
  );
};

export default Total;
