import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([]);
  const [maxPointIndex, setMaxPointIndex] = useState(0);

  const moveToNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * (8 - 1) + 1);
    setSelected(randomIndex);
  };

  const voteForAnecdote = () => {
    const tempPointsArray = [...points];
    tempPointsArray[selected] = points[selected] ? points[selected] + 1 : 1;
    setPoints(tempPointsArray);
    const maxIndex = getGreatestNumberIndex(tempPointsArray);
    setMaxPointIndex(maxIndex);
  };

  const getGreatestNumberIndex = (arr) => {
    if (!arr.length) return -1;
    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }
    return maxIndex;
  };

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <h3>has {points[selected] || 0} votes</h3>
      <div>
        <button onClick={voteForAnecdote}>vote</button>
        <button onClick={moveToNextAnecdote}>next anecdote</button>
      </div>
      {points.length ? (
        <>
          <h3>Anecdotes with most votes</h3>
          <p>{anecdotes[maxPointIndex]}</p>
        </>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default App;
