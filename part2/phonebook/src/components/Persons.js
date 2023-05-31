const Persons = ({ persons }) => {
    return (
      <div>
        {persons.length ? (
          persons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          ))
        ) : (
          <p>No persons</p>
        )}
      </div>
    );
  };
  
  export default Persons;
  