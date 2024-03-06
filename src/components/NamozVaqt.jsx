import React, { useEffect, useState } from "react";
import axios from "axios";

const NamozVaqti = () => {
  const [namozDate, setNamozDate] = useState("");
  let [hudud, setHudud] = useState("Toshkent");
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://islomapi.uz/api/present/day?region=${hudud}`)
      .then((res) => {
        const persons = res.data;
        setNamozDate(persons);
        setLoading(false);
      });
  }, [hudud]);

  return (
    <div className="namozVaqti">
      <div className="container ">
        <select
          id="city"
          onChange={(e) => {
            setHudud(e.target.value);
          }}
        >
          <option value="Toshkent">Toshkent</option>
          <option value="Termiz">Termiz</option>
          <option value="Namangan">Namangan</option>
          <option value="Farg'ona">Farg'ona</option>
          <option value="Samarqand">Samarqand</option>
          <option value="Qarshi">Qarshi</option>
          <option value="Buxoro">Buxoro</option>
          <option value="Xiva">Xiva</option>
          <option value="Nukus">Nukus</option>
          <option value="Navoiy">Navoiy</option>
          <option value="Guliston">Guliston</option>
          <option value="Jizzax">Jizzax</option>
          <option value="Andijon">Andijon</option>
        </select>

        <p className="hudud">{hudud} Shahri</p>

        <div className="VaqtlarDivs">
          {!loading ? (
            <>
              <div>
                <p>Tong saharlik</p>
                <p>{namozDate.times.tong_saharlik}</p>
              </div>
              <div>
                <p>Quyosh</p>
                <p>{namozDate.times.quyosh}</p>
              </div>

              <div>
                <p>Peshin</p>
                <p>{namozDate.times.peshin}</p>
              </div>

              <div>
                <p>Asr</p>
                <p>{namozDate.times.asr}</p>
              </div>

              <div>
                <p>Shom iftor</p>
                <p>{namozDate.times.shom_iftor}</p>
              </div>

              <div>
                <p>Hufton</p>
                <p>{namozDate.times.hufton}</p>
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>

        <div>
          {!loading ? (
            <p className="KunHisobi">
              {namozDate.weekday} || {namozDate.date} || Hijriy yil hisobida{" "}
              {namozDate.hijri_date.month} oyi {namozDate.hijri_date.day}-kun.
            </p>
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NamozVaqti;
