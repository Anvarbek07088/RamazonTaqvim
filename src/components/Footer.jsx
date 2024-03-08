import youtube from "../Imges/youtube.png";
import telegram from "../Imges/telegram.png";
import headerLogo from "../Imges/RamazonLogo.svg";
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
            <NavLink to={"https://t.me/IT_bmats"} className="textDicNone">
              <div className="footerBtn">
                <img src={telegram} alt="" />
                <div className="footerBtnText">
                  <p>Available on the</p>
                  <p>Telegram</p>
                </div>
              </div>
            </NavLink>
            <NavLink to={"https://youtube.com/@anvarbek07088?si=WgJ2Ka7FcPk1Gsma"} className="textDicNone">
              <div className="footerBtn">
                <img src={youtube} alt="" />
                <div className="footerBtnText">
                  <p>Get it on</p>
                  <p>YouTube</p>
                </div>
              </div>
            </NavLink>
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
                <NavLink to={"/"} className="text ">
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink to={"/taqvim"} className="text">
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
          <div className="footerBottomUl2">
            <ul className="">
              <li>
                <NavLink to={"https://t.me/IT_bmats"} className="text">
                  <a href="https://t.me/IT_bmats">
                    <img src={Fesbok} alt="" />
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://t.me/IT_bmats"} className="text">
                  <a href="https://t.me/IT_bmats">
                    <img src={twitter} alt="" />
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://t.me/IT_bmats"} className="text">
                  <a href="https://t.me/IT_bmats">
                    <img src={insta} alt="" />
                  </a>
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
