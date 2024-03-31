import { Link } from "react-router-dom";
import Logo from "../assets/image/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <Link to="/" className="flex-1">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-8 w-8" />
            <p className="font-bold">TerraVista</p>
          </div>
        </Link>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
