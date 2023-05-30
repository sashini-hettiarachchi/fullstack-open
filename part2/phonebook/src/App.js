import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const isNameExist = persons.findIndex( p => p.name === newName) >= 0
    if(isNameExist){
      alert(`${newName} is already added to phonebook`)
    }else{
      setPersons([...persons, { name: newName }]);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.name}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
