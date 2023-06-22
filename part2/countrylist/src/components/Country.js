const Country = ({c}) => {
  return (
    <div key={c.name}>
      <h1>{c.name.common}</h1>
      <p>Capital is {c?.capital[0]}</p>
      <p>Area is {c.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(c.languages)?.map((lan) => (
          <li key={lan}>{lan}</li>
        ))}
      </ul>
      <img src={c?.flags?.png} alt={c?.flags?.alt} />
    </div>
  );
};

export default Country;
