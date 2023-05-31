import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "00-99001-19991" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  console.log("🚀 ~ file: App.js:10 ~ App ~ filteredPersons:", filteredPersons);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const isNameExist = persons.findIndex((p) => p.name === newName) >= 0;
    if (isNameExist) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  };

  const handleFilter = (event) => {
    const regex = new RegExp(`.*${event.target.value}.*`, "gmi");
    const filterP = persons.filter((p) => regex.test(p.name));
    setFilteredPersons(filterP);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter} />
      </div>
      <form>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Filtered Numbers</h2>
      <div>
        {filteredPersons.length ? (
          filteredPersons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))
        ) : (
          <p>No persons</p>
        )}
      </div>
      <div>
        <h2>All Numbers</h2>
        {persons.map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
