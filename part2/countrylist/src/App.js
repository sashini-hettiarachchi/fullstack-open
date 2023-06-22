import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import { getAll } from "./services/country";
import Country from "./components/Country";

const App = () => {
  const [counties, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showCountry, setShowCountry] = useState()

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

  const showCountryDetails = (c) => {
    setShowCountry(c)
  }

  return (
    <div>
      <Filter handleFilter={handleFilter} />
      {filteredCountries?.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filteredCountries?.map((c) => {
          if (filteredCountries.length === 1) {
            return (
             <Country c={c} key={c.name}/>
            );
          }
          return <><p key={c.name.common}>{c.name.common}</p><button onClick={()=>showCountryDetails(c)}>show</button></>;
        })
      )}
      {
        showCountry && 
        <Country c={showCountry}/>
      }
    </div>
  );
};

export default App;
