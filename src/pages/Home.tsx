import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import Hero from "../components/Hero";

interface Country {
  name: {
    common: string;
  };
  capital: string;
  population: number;
  region: string;
  flags: {
    svg: string;
  };
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );
        setCountries([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <main>
        <Hero />
      </main>
      <section className="container px-4 py-16 grid grid-cols-4 gap-8">
        {countries.map((country) => (
          <CountryCard
            countryName={country.name}
            capital={country.capital}
            population={country.population}
            region={country.region}
            flags={country.flags}
          />
        ))}
      </section>
    </>
  );
};

export default Home;
