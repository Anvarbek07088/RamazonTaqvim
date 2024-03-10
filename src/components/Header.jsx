import { NavLink } from "react-router-dom";
import headerLogo from "../Imges/RamazonLogo.svg";
import menu from "../Imges/menu.png";
import Xlogo from "../Imges/Xlogo.png";
import { useContext, useState } from "react";
import { MyContext } from "../App";

const Header = () => {
  const value =useContext(MyContext)

  return (
    <div className="header">
      <div className="container ">
        <div className="menuBar">
          <div onClick={() => value.setMenuOpen(!value.menuOpen)}>
            <img src={value.menuOpen ? Xlogo : menu} alt="" />
          </div>
          <div id={"menuBacround" } className={value.menuOpen ? " menuOpens;" : "menuNoOpens"} onClick={() => value.setMenuOpen(false)}></div>
          <div className={value.menuOpen ? " menuOpens;" : "menuNoOpens"}>
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
