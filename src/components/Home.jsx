import masjid from "../Imges/masjid.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="container ">
        <img src={masjid} alt="" data-aos="fade-right"/>
        <div className="homeText" data-aos="fade-left">
          <p>Nima uchun biz bu saytni yaratdik?</p>
          <p>
            Biz insonlarga ko`proq foyda keltirish ullarni ishlarini
            osonlashtirish uchun bu proektni yo`lga qo`ydik. Ular har kuni
            internetdan izlaydigon narsalarini bita vebsaytda jamlash uchun bu
            katta ma`suliyatni o`z zimmamizga oldik.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
