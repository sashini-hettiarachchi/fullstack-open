const Button = (props) => {
  const { handleOnclick, text } = props;
  return <button onClick={handleOnclick}>{text}</button>;
};

export default Button;
