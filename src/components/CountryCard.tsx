import { Link } from "react-router-dom";

type CountryCardProps = {
  countryName: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string;
};

const CountryCard = ({ countryName, population, region, capital, flags }: CountryCardProps) => {
  return (
    <article className="card bg-base-100 shadow-xl rounded">
      <figure className="hover:opacity-80 transition duration-100">
        <Link to={`/country/${countryName.common}`}>
          <img src={flags.svg} className="w-full aspect-video object-cover" alt={flags.alt} />
        </Link>
      </figure>
      <div className="card-body">
        <Link to={`/country/${countryName.common}`}>
          <h2 className="card-title hover:underline hover:underline-offset-8 hover:text-primary transition duration-100">
            {countryName.common}
          </h2>
        </Link>
        <div>
          <p className="font-medium">
            Population: <span className="font-normal">{population.toLocaleString()}</span>
          </p>
          <p className="font-medium">
            Region: <span className="font-normal">{region}</span>
          </p>
          <p className="font-medium">
            Capital: <span className="font-normal">{capital}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
