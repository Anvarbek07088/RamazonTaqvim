import aplle from "../Imges/apple.svg";
import headerLogo from "../Imges/RamazonLogo.svg";
import googlePlay from "../Imges/googlePlay.svg";
import Fesbok from "../Imges/Fesbok.svg";
import insta from "../Imges/insta.svg";
import twitter from "../Imges/twitter1.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="container ">
          <div>
            <p className="footerTex1">Bizni o`z telefoningizda kuzating</p>
          </div>
          <div className="footerBtns">
            <div className="footerBtn">
              <img src={aplle} alt="" />
              <div className="footerBtnText">
                <p>Available on the</p>
                <p>AppStore</p>
              </div>
            </div>
            <div className="footerBtn">
              <img src={googlePlay} alt="" />
              <div className="footerBtnText">
                <p>Get it on</p>
                <p>GooglePlay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container ">
          <div>
            <img src={headerLogo} alt="" />
          </div>
          <div className="footerBottomUl">
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
          <div className="footerBottomUl2">
            <ul className="">
              <li>
                <NavLink to={"/"} className="text home">
                  <img src={Fesbok} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/taqvim"} className="text taqvim">
                  <img src={twitter} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/surah"} className="text surah">
                  <img src={insta} alt="" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
