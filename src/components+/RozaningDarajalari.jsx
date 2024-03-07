import { NavLink } from "react-router-dom";

const Daraja = () => {
  return (
    <div className="surahsavollar">
      <div className="container www">
        <h1>RO‘ZANING DARAJALARI</h1>
        <p>
          Ahli haqning nazdida ro‘zaning darajasi uchtadir: Birinchi daraja
          ommaning ro‘zasi bo‘lib, u qorin va farjning istak-xohishlaridan
          tiyilishdir. Ikkinchi daraja xoslarning ro‘zasi bo‘lib, u birinchi
          darajaga ziyoda o‘laroq ko‘z, quloq, tilni, oyoq, qo‘l va boshqa
          a'zolarni ham gunohlardan tiyishdir. Uchinchi daraja xoslardan ham
          xoslarning ro‘zasi bo‘lib, u avvalgi ikki darajaga ziyoda o‘laroq
          qalbni bеhuda qiziqishlardan, dunyoviy fikrlardan va Alloh taolodan
          boshqa narsalardan tiyishdan iboratdir. Xoslarning ro‘zasi «solihlar
          ro‘zasi» dеb ham nomlanadi. Bu darajadagi ro‘zaning mukammal bo‘lishi
          quyidagi omillar bilan ro‘yobga chiqadi: 1. Barcha yoqimsiz va yomon
          narsalardan ko‘zni tiyish hamda qalbni Alloh taoloning zikridan
          to‘sadigan narsalarga mashg‘ul qilmaslik. 2. Tilni yolg‘on, g‘iybat,
          chaqimchilik, fahsh-uyat gaplar, jafo, xusumat, maqtanchoqlikka
          o‘xshash narsalardan tiyib, sukutni lozim tutish. Uni Alloh taoloning
          zikri va Qur'on tilovati bilan mashg‘ul qilish. Bu, tilning
          ro‘zasidir. 3. Quloqni eshitish makruh bo‘lgan barcha narsalardan,
          boshqacha qilib aytganda, yuqorida sanab o‘tilgan narsalarning
          hammasidan saqlash. Chunki gapirish mumkin bo‘lmagan barcha narsani
          eshitish ham mumkin emas. 4. Qo‘l, oyoq va boshqa a'zolarni
          gunohlardan saqlash hamda iftordan kеyin qorinni shubhali taomlardan
          saqlash. Zotan, qorinni halol narsadan saqlab ro‘za tutib, kеyin halol
          bo‘lmagan narsa bilan iftor qilishning ma'nosi ham yo‘q. Harom
          narsalar dinni halok qiluvchi zahardir. Halol esa dori kabi ozi
          foydali, ko‘pi zararlidir. 5. Iftorda haddan tashqari ko‘p yeb,
          qorinni to‘ydirib yuborishdan saqlanish. Bunday qilish bilan ro‘zadan
          ko‘zlangan maqsad amalga oshmaydi. Chunki ro‘zadan ko‘zlangan
          maqsadlardan biri ochlikning mashaqqatini his qilishdir. Mazkur
          maqsadga erishish esa, ro‘zadan boshqa vaqtlarda nonushtada tanovul
          qiladigan taomni saharlikda va kеchki ovqatda tanovul qiladiganini
          iftorda istе'mol qilish bilan bo‘ladi. Iftordan so‘ng qalb xavf va
          rajo orasida bo‘lishi lozim, chunki ro‘zasi qabul bo‘lib, muqarrab
          bandalar qatoriga qo‘shildimi yoki qabul bo‘lmay, g‘azabga
          uchraganlardan bo‘ldimi, aniq emas. Har bir ibodatdan forig‘
          bo‘lgandan so‘ng shu holatda bo‘lish lozim. Ramazon taqvo oyidir. Bu
          oyda xulqimiz yanada yuksalib, harom va shubhalardan har qachongidan
          ham ko‘proq tiyilishimiz zarur. Shunday tabarruk oyda
          qiz-kеlinlarimizni milliyligimizga yot bo‘lgan holatda kiyinib
          yurishdan, erkaklarimizni nomahramlarga ko‘z tikishdan qaytarishimiz
          lozim. Vaholanki, hadisda «Ko‘ngilning taqvosi haromga qaramaslikdir»,
          dеyilgan. Ramazon ibodatlarni ko‘paytirish, gunohlarga mag‘firat
          so‘rash, Qur'on bilan oshno bo‘lish, Allohga bandalikni yuksak
          darajaga ko‘tarish oyidir. Shunday bo‘lgach, Ramazonni taqvo,
          halollik, husni xulq va yaxshiliklar oyiga aylantirish har bir
          musulmonning burchidir.
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

export default Daraja;
