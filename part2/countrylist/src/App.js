import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { getAll } from "./services/country";

const App = () => {
  const [counties, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getAll()
      .then((response) => {
        if (response.status === 200) {
          setCountries([...response.data]);
        }
      })
      .catch((err) => console.log("error", err));
  }, []);

  const handleFilter = (event) => {
    if (event.target.value) {
      const regex = new RegExp(`.*${event.target.value}.*`, "gmi");
      const filterC = counties.filter((c) => regex.test(c.name.common));
      setFilteredCountries(filterC);
    } else {
      setFilteredCountries([]);
    }
  };

  return (
    <div>
      <Filter handleFilter={handleFilter} />
      {filteredCountries?.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filteredCountries?.map((c) => {
          if (filteredCountries.length === 1) {
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
          }
          return <p key={c.name.common}>{c.name.common}</p>;
        })
      )}
    </div>
  );
};

export default App;
