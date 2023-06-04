import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import { create, deletePerson, getAll, update } from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [notification, setNotification] = useState(null);

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
    const existingPeron = persons.find((p) => p.name === newName);
    if (existingPeron) {
      const agreeToUpdate = window.confirm(
        `${newName}  is already added to phone book, replace the old number with a new one?`
      );
      if (agreeToUpdate) {
        const updatePersonObj = {
          name: existingPeron?.name,
          number: newNumber,
          id: existingPeron?.id,
        };
        update(existingPeron?.id, updatePersonObj)
          .then((response) => {
            if (response.status === 200) {
              const newPersonList = [...persons];
              newPersonList[persons.findIndex((p) => p.name === newName)] =
                updatePersonObj;
              setPersons(newPersonList);
            }
            setNotification({
              message: `Updated ${existingPeron?.name} number as ${newNumber}`,
              type: "success",
            });
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          })
          .catch((err) => {
            setNotification({
              message: `Information of ${existingPeron?.name} has already been removed from server`,
              type: "error",
            });
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          });
      }
    } else {
      create({
        name: newName,
        number: newNumber,
      })
        .then((response) => {
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
            setNotification({ message: `Added ${newName}`, type: "success" });
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          }
        })
        .catch((err) => console.log("error", err));
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
    const agreeToDelete = window.confirm(`Delete ${name}`);
    if (agreeToDelete) {
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
      {notification && (
        <Notification
          message={notification?.message}
          type={notification?.type}
        />
      )}
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
