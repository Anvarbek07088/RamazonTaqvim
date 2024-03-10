import { NavLink } from "react-router-dom";
import headerLogo from "../Imges/RamazonLogo.svg";
import menu from "../Imges/menu.png";
import Xlogo from "../Imges/Xlogo.png";
import { useState } from "react";

const Header = () => {
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="container ">
        <div className="menuBar">
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? Xlogo : menu} alt="" />
          </div>
          <div className={menuOpen ? " menuOpens;" : "menuNoOpens"}>
            <ol className="olHeader">
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
              <li>
                <NavLink to={"/namozvaqti"} className="text ">
                  Namoz
                </NavLink>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <NavLink to="/">
            <img src={headerLogo} alt="" className="headerLogo" />
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
            <li>
              <NavLink to={"/namozvaqti"} className="text ">
                Namoz
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
