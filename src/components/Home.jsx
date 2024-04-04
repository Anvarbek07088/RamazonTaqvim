import masjid from "../Imges/masjid.jpg";
import MuftiyVedyo from "../Imges/MUFTIY.mp4";
import HomeAnime from "../components+/HomeAnimeText";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="home">
      <HomeAnime />
      <div className="container " id="homeCont">
        <img src={masjid} alt="" data-aos="fade-right" />
        <div className="homeText" data-aos="fade-left">
          <p className="animate-charcter">Nima uchun biz bu saytni yaratdik?</p>
          <p>
            <span>Biz insonlarga _</span>
            <span> ko`proq foyda _</span>
            <span>keltirish ullarni _</span>
            <span> ishlarini osonlashtirish _</span>
            <span> uchun bu proektni _</span> <span>yo`lga qo`ydik. _</span>
            <span>Ular har kuni _</span> <span>internetdan izlaydigon _</span>{" "}
            <span>narsalarini bita _</span> <span>vebsaytda jamlash _</span>{" "}
            <span>uchun bu katta ma`suliyatni _</span>{" "}
            <span>o`z zimmamizga oldik.</span>{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="vedios">
          <p>
            Ўзбекистон мусулмонлари идораси раиси, муфтий Нуриддин Холиқназар
            ҳазратларининг Рамазон ойи табриклари
          </p>
          <video controls>
            <source src={MuftiyVedyo} type="video/mp4" />
          </video>
          <p>
            shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Ramazon haqida
            vedyolari
          </p>
          <div className="youtub">
            <ReactPlayer
              url={"https://youtu.be/QldRFRWvBxs?si=WKVBbXSPxj5n_NvP"}
              controls={true}
              width='100%'
              className="yotubevedyo"
            />
            <ReactPlayer
              url={"https://youtu.be/EMfZ7o-kI78?si=-JZtBFq0iyINs8fy"}
              controls={true}
              width='100%'
              className="yotubevedyo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
