import Image from "../../public/world-map-min.png";

const Hero = () => {
  const backgroundImage = Image;

  return (
    <section className="hero min-h-[50vh]" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="container">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Discover the World with TerraVista</h1>
          <p className="mb-5">Explore countries with this free tool</p>
          <form className="flex items-center flex-col lg:flex-row space-y-2 lg:space-y-0">
            <input
              type="text"
              placeholder="Search a country"
              className="input input-bordered w-full text-black lg:rounded-r-none"
            />
            <button className="btn btn-primary lg:rounded-l-none px-8 w-full lg:w-auto">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
