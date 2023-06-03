// import { deletePerson } from "../services/persons";

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.number}
            {"    "}
            <button onClick={() => handleDelete(person.id, person.name)}>
              delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Persons;
