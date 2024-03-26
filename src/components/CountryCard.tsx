type CountryCardProps = {
  countryName: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    svg: string;
  };
};

const CountryCard = ({ countryName, population, region, capital, flags }: CountryCardProps) => {
  return (
    <article className="card bg-base-100 shadow-xl rounded">
      <figure>
        <img src={flags.svg} className="w-full aspect-video object-cover" alt={countryName.common} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{countryName.common}</h2>
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
