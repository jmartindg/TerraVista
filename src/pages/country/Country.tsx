import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleSkeleton from "../../components/loaders/SingleSkeleton";

// Icons
import { FaUsers, FaMapLocationDot, FaCity, FaLanguage, FaMoneyBill, FaClock, FaCalendarDay } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  languages: { [key: string]: string };
  currencies: { [key: string]: string };
  capital: string;
  population: number;
  region: string;
  subregion: string;
  timezones: string;
  startOfWeek: string;
}

interface Currency {
  name: string;
  symbol: string;
}

const Country = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [languages, setLanguages] = useState<string>("");
  const [currencies, setCurrencies] = useState<string>("");
  const [timezones, setTimezones] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleCountry = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setCountries(response.data);

        // Get languages
        const languagesData = response.data[0].languages;
        const languagesArray = Object.values(languagesData).map((lang) => lang);
        setLanguages(languagesArray.join(", "));

        // Get currencies
        const currenciesData: { [key: string]: Currency } = response.data[0].currencies;
        const currenciesArray = Object.values(currenciesData).map(
          (currency: Currency) => `${currency.name} (${currency.symbol})`
        );
        setCurrencies(currenciesArray.join(", "));

        // Get timezones
        const timezonesData = response.data[0].timezones;
        setTimezones(timezonesData.join(", "));

        setTimeout(() => setLoading(false), 1000);
      } catch (error: unknown) {
        toast.error("Oh no! An error occurred." + error);
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchSingleCountry();
  }, [name]);

  return (
    <section className="container px-4 py-16">
      {loading ? (
        <SingleSkeleton />
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <figure>
            <img src={countries[0]?.flags.svg} className="w-full" alt={countries[0]?.flags.alt} />
          </figure>
          <section>
            <h2 className="text-3xl lg:text-4xl font-bold pb-1">{name}</h2>
            <p className="font-semibold">
              Official Name: <span className="font-normal">{countries[0]?.name.official}</span>
            </p>

            <section className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <p className="font-medium flex items-center">
                <FaUsers size={24} className="mr-2" />
                Population:&nbsp;<span className="font-normal">{countries[0]?.population.toLocaleString()}</span>
              </p>
              <p className="font-medium flex items-center">
                <FaMapLocationDot size={24} className="mr-2" />
                Region:&nbsp;<span className="font-normal">{countries[0]?.region}</span>
              </p>
              <p className="font-medium flex items-center">
                <FaCity size={24} className="mr-2" />
                Captial:&nbsp;<span className="font-normal">{countries[0]?.capital}</span>
              </p>
              <p className="font-medium flex items-center">
                <FaMapMarkerAlt size={24} className="mr-2" />
                Subregion:&nbsp;<span className="font-normal">{countries[0]?.subregion}</span>
              </p>
              <p className="font-medium flex items-center">
                <FaCalendarDay size={24} className="mr-2" />
                Start of Week:&nbsp;<span className="font-normal capitalize">{countries[0]?.startOfWeek}</span>
              </p>

              <p className="font-medium flex items-center">
                <FaMoneyBill size={24} className="mr-2" />
                {currencies.length < 2 ? "Currencies" : "Currency"}:&nbsp;
                <span className="font-normal capitalize">{currencies}</span>
              </p>
            </section>

            <section className="pt-5 space-y-5">
              <p className="font-medium flex items-center">
                <FaLanguage size={24} className="mr-2" />
                {languages.length < 2 ? "Language" : "Languages"}:&nbsp;
                <span className="font-normal">{languages}</span>
              </p>
              <p className="font-medium flex items-center">
                <FaClock size={24} className="mr-2" />
                {timezones.length < 2 ? "Timezone" : "Timezones"}:&nbsp;
                <span className="font-normal capitalize">{timezones}</span>
              </p>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default Country;
