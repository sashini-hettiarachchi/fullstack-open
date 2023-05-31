import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "00-99001-19991" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

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
      <Filter handleFilter={handleFilter} />
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Filtered Numbers</h2>
      <Persons persons={filteredPersons} />
      <div>
        <h2>All Numbers</h2>
        <Persons persons={persons} />
      </div>
    </div>
  );
};

export default App;
