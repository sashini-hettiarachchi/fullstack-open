import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { create, deletePerson, getAll } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      return setPersons(response.data);
    });
  }, []);

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
      create({
        name: newName,
        number: newNumber,
      }).then((response) => {
        if (response.status === 201) {
          const { name, id, number } = response.data;
          setPersons([
            ...persons,
            {
              name,
              number,
              id,
            },
          ]);
        }
      });
    }
  };

  const handleFilter = (event) => {
    if (event.target.value) {
      const regex = new RegExp(`.*${event.target.value}.*`, "gmi");
      const filterP = persons.filter((p) => regex.test(p.name));
      setFilteredPersons(filterP);
    } else {
      setFilteredPersons([]);
    }
  };

  const handleDelete = (id, name) => {
   const agreeToDelete = window.confirm(`Delete ${name}`)
   if(agreeToDelete){
    deletePerson(id).then((response) => {
      if (response.status === 200) {
        setPersons([...persons.filter((p) => p.id !== id)]);
      }
    });
   }
    
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
      <div>
        <h2>Numbers</h2>
        <Persons
          persons={filteredPersons.length ? filteredPersons : persons}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
