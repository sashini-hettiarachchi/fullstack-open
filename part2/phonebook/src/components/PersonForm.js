const PersonForm = ({ handleNameChange, handleNumberChange, addName }) => {
  return (
    <>
    <h2>add a new</h2>
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
    </>
  );
};

export default PersonForm;
