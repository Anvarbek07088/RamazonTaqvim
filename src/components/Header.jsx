import { NavLink } from "react-router-dom";
import headerLogo from "../Imges/RamazonLogo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container ">
        <div>
          <NavLink to="/">
            <img src={headerLogo} alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="">
            <li>
              <NavLink to={"/"} className="text ">
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink to={"/taqvim"} className="text ">
                Taqvim
              </NavLink>
            </li>
            <li>
              <NavLink to={"/surah"} className="text ">
                Duolar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
