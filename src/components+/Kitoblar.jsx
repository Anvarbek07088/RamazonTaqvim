
import { NavLink } from "react-router-dom";
import kitob1 from "../Imges/Kitob1.png"
import kitob2 from "../Imges/Kitob2.png"
import kitob3 from "../Imges/kitob3.png"
import kitob4 from "../Imges/kitob4.png"
import kitob5 from "../Imges/kitob5.png"
import kitob6 from "../Imges/Kitob6.jpg"
import kitob7 from "../Imges/otkish.jpg"
const Kitoblar = () => {
  return (
   <div className="Kitoblar">
    <div className="container">
        <p className="KitobP">KITOBLAR</p>
        <div className="KitobBoxs">
            <div className="kitobBox">
                <img src={kitob1} alt="" />
                <div>
                    <p>Kemaga G'arq Bo'lmay Turib​</p>
                    <p>Shayx Doktor Soloh ibn Favzon al-Favzon</p>
                    <NavLink to={"https://islomnuri.com/wp-content/uploads/2022/04/kema-garq-bolmay.pdf"} className={"KitobLink"}>Kitobni ko'rish</NavLink>
                </div>
            </div>

            <div className="kitobBox">
                <img src={kitob2} alt="" />
                <div>
                    <p>Vaqt Umr Demakdir​</p>
                    <p>Shayx Muhammad Hasson</p>
                    <NavLink className={"KitobLink"} to={"https://islomnuri.com/wp-content/uploads/2022/04/Vaqt-umr-demakdir.pdf"}>Kitobni ko'rish</NavLink>
                </div>
            </div>

            <div className="kitobBox">
                <img src={kitob3} alt="" />
                <div>
                    <p>Ramazon Suhbatlari​</p>
                    <p>Shayx Muhammad ibn Solih al-Usay</p>
                    <NavLink className={"KitobLink"} to={"https://islomnuri.com/wp-content/uploads/2021/03/Ramazon-suhbatlari.pdf"}>Kitobni ko'rish</NavLink>
                </div>
            </div>

            <div className="kitobBox">
                <img src={kitob4} alt="" />
                <div>
                    <p>Tobeinlar hayotiga chizgilar 1​</p>
                    <p>Abudurrahmon Ra'fat Bosho</p>
                    <NavLink className={"KitobLink"} to={"https://islomnuri.com/wp-content/uploads/2022/04/Tobeinlar.pdf"}>Kitobni ko'rish</NavLink>
                </div>
            </div>

            <div className="kitobBox">
                <img src={kitob5} alt="" />
                <div>
                    <p>Ayol va uning jamiyat ustivorligidagi o'rni​</p>
                    <p>Shayx Muhammad Hasson</p>
                    <NavLink className={"KitobLink"} to={"https://islomnuri.com/wp-content/uploads/2022/04/ayolning-orni.pdf"}>Kitobni ko'rish</NavLink>
                </div>
            </div>

            <div className="kitobBox">
                <img src={kitob6} alt="" />
                <div>
                    <p>TARIXI MUHAMMADIY​</p>
                    <p>Alixonto’ra Sog’uniy</p>
                    <NavLink className={"KitobLink"} to={"https://siyrat.uz/storage/books/MDh1lrJ9on4m7H1hd68aQWzfLbKYSrvbtDN2Qbk8.pdf"}>Kitobni ko'rish</NavLink>
                </div>
            </div>

            <div className="kitobBox">
                <img src={kitob7} alt="" />
                <div>
                    <p>Ot kishnagan oqshomlar​</p>
                    <p>Tog'ay Murod</p>
                    <NavLink className={"KitobLink"} to={"https://www.kitob.uz/book/3974/reader"}>Kitobni ko'rish</NavLink>
                </div>
            </div>
        </div>
    </div>
   </div>
  );
};

export default Kitoblar;