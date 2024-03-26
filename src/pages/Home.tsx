import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import CountryCard from "../components/CountryCard";
import Hero from "../components/Hero";
import Skeleton from "../components/Skeleton";

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  capital: string;
  population: number;
  region: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = async (query: string) => {
    setSearchQuery(searchQuery);

    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${query}?fields=name,capital,population,region,flags`
      );

      setCountries(response.data || []);
      setTimeout(() => setLoading(false), 2000);
    } catch (error) {
      toast.error("No countries found for " + query);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );
        setCountries(response.data || []);
        setTimeout(() => setLoading(false), 2000);
      } catch (error: unknown) {
        toast.error("Oh no! An error occurred." + error);
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchCountries();
  }, []);

  // Display country cards
  const renderCountryCards = () => {
    return countries.map((country, index) => (
      <CountryCard
        key={index}
        countryName={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
        flags={country.flags}
      />
    ));
  };

  // Skeleton component array
  const skeletonArray = Array.from({ length: 10 }).map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <main>
        <Hero onSearch={handleSearch} />
      </main>
      <section className="container px-4 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {loading ? skeletonArray : renderCountryCards()}
      </section>
    </>
  );
};

export default Home;
