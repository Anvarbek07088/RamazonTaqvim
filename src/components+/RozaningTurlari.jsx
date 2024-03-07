import { NavLink } from "react-router-dom";

const Turlari = () => {
  return (
    <div className="surahsavollar">
      <div className="container www ">
        <h1>RO‘ZANING TURLARI</h1>
        <p>
          Ro‘zaning turlari to‘rttadir: Lozim ro‘za. Lozim ro‘za ikkiga: farz va
          vojibga bo‘linadi. Farz ro‘za. U ham ikkiga: tayin qilingan va tayin
          qilinmagan farz ro‘zaga bo‘linadi. Tayin qilingan farz ro‘za – Ramazon
          ro‘zasini ado etishdir. Bu Qur'on, sunnat va ulamolar ijmo'i bilan
          sobit bo‘lgan. Tayin qilinmagan farz ro‘za – Ramazonning qazosi va
          kafforatining ro‘zasidir. Shuningdеk, hayz va nifosli ayollar,
          homilador va emizikli ayollar ham imkon topganlarida Ramazonning qazo
          ro‘zasini tutadilar. Vojib ro‘za ham ikkiga: tayin qilingan va tayin
          qilinmagan vojib ro‘zaga bo‘linadi. Tayin qilingan vojib ro‘za –
          muayyan nazr (tayinli kun) ro‘za va Ramazon oyining hilolini ko‘rib,
          shahodati qabul qilinmagan kishining ro‘zasidir. Tayin qilinmagan
          vojib ro‘za: a) Nazr ro‘za (mutlaq ro‘za ham dеyiladi). Bu kunini
          tayin qilmasdan, bir kun ro‘za tutishni nazr qilgan kishining
          ro‘zasidir. Masalan, «Falon ishim amalga oshsa, bir kun ro‘za tutishni
          nazr qildim» dеyilgani kabi. b) Muayyan kunda ro‘za tutishni nazr
          qilib, tuta olmagan kishining qazo ro‘zasi. v) Ro‘za tutishga qasam
          ichib, zimmasiga ro‘zani vojib qilib olgan kishining ro‘zasi. g) Nafl
          ro‘zani tutishni boshlab, oxiriga yetkazmay, ochib yuborgan kishining
          o‘sha kun uchun tutadigan qazo ro‘zasi. d) Kafforat ro‘zalari: zihor,
          qatl, Ramazonning ro‘zasini qasddan ochib yuborish va qasamni
          buzganligining kafforati uchun tutiladigan ro‘zalar. е) Tamattu' va
          qiron uchun ehromga kirib, qurbonlik qila olmagan kishining o‘n kunlik
          ro‘zasi. j) Ehromdalik chog‘ida, vaqti kirmasidan oldin soch oldirgan
          kishining kafforat uchun tutadigan uch kunlik ro‘zasi. z) Haramda ov
          qilishning jazosi uchun tutiladigan ro‘za. i) E'tikofini buzib qo‘ygan
          kishining qazo ro‘zasi.
        </p>
      </div>
      <div className="SurahSavol">
        <div className="container">
          <div>
            <NavLink to="/surah" className="savol">
              Duolar
            </NavLink>
          </div>
          <div>
            <NavLink to="/surah/savol1" className="savol">
              RO‘ZA QANDAY IBODAT?
            </NavLink>
          </div>
          <div>
            <NavLink to="/surah/savol2" className="savol">
              RO‘ZANING DARAJALARI
            </NavLink>
          </div>
          <div>
            <NavLink to="/surah/savol3" className="savol">
              RO‘ZANING SHARTLARI
            </NavLink>
          </div>
          <div>
            <NavLink to="/surah/savol4" className="savol">
              RO‘ZANING TURLARI
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turlari;
