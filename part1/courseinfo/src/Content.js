import Part from "./Part";

const Content = ({
  props
}) => {
  return (
    <>
      <Part part={props[0].name} exercises={props[0].exercises} />
      <Part part={props[1].name} exercises={props[1].exercises} />
      <Part part={props[2].name} exercises={props[2].exercises} />
    </>
  );
};

export default Content;
