import { NavLink } from "react-router-dom";
import headerLogo from "../Imges/RamazonLogo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container ">
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <div>
          <ul className="">
            <li>
              <NavLink to={"/"} className="text home">
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink to={"/taqvim"} className="text taqvim">
                Taqvim
              </NavLink>
            </li>
            <li>
              <NavLink to={"/surah"} className="text surah">
                Suralar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
