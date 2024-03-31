import { useState } from "react";
import Image from "../assets/image/world-map-min.png";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const backgroundImage = Image;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <section className="hero min-h-[50vh]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="container">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Discover the World with TerraVista</h1>
          <p className="mb-5">Explore countries with this free tool</p>
          <form onSubmit={handleSearchSubmit} className="flex items-center flex-col lg:flex-row space-y-2 lg:space-y-0">
            <input
              type="text"
              placeholder="Search a country"
              className="input input-bordered w-full text-black lg:rounded-r-none"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary lg:rounded-l-none px-8 w-full lg:w-auto">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
