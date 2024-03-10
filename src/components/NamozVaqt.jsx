import React, { useEffect, useState } from "react";
import axios from "axios";
import asr from "../Imges/asr.webp";
import bomdod from "../Imges/bomdod.webp";
import peshin from "../Imges/peshin.webp";
import quyosh from "../Imges/quyosh.webp";
import shom from "../Imges/shom.webp";
import xufton from "../Imges/xufton.webp";

const NamozVaqti = () => {
  const [namozDate, setNamozDate] = useState("");
  let [hudud, setHudud] = useState("Toshkent");
  let [loading, setLoading] = useState(true);
  let [time,setTime]=useState('')

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

  setTimeout(() => {
    setTime(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
  }, 1000);

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

        <p className="hudud">
          <span>{hudud} Shahri.</span> <span>(
          
            {namozDate.weekday} || {namozDate.date}
          
          )</span><span>[{time}]</span>
        </p>

        <div className="VaqtlarDivs">
          <div >
            <div>
              <img src={bomdod} alt="" />
            </div>
            <div>
              {!loading ? (
                <>
                  <p>Tong saharlik</p>
                  <p>{namozDate.times.tong_saharlik}</p>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>

          <div>
            <div>
              <img src={quyosh} alt="" />
            </div>
            <div>
              {!loading ? (
                <>
                  <p>Quyosh</p>
                  <p>{namozDate.times.quyosh}</p>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>

          <div>
            <div>
              <img src={peshin} alt="" />
            </div>
            <div>
              {!loading ? (
                <>
                  <p>Peshin</p>
                  <p>{namozDate.times.peshin}</p>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>

          <div>
            <div>
              <img src={asr} alt="" />
            </div>
            <div>
              {!loading ? (
                <>
                  <p>Asr</p>
                  <p>{namozDate.times.asr}</p>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>

          <div>
            <div>
              <img src={shom} alt="" />
            </div>
            <div>
              {!loading ? (
                <>
                  <p>Shom iftor</p>
                  <p>{namozDate.times.shom_iftor}</p>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>

          <div>
            <div>
              <img src={xufton} alt="" />
            </div>
            <div>
              {!loading ? (
                <>
                  <p>Hufton</p>
                  <p>{namozDate.times.hufton}</p>
                </>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>
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
