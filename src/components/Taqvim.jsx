import { useEffect, useState } from "react";
import { shahars } from "../__util__/Data";

const Taqvim = () => {
  let sa;

  shahars.forEach((e) => {
    e.id == 1 ? (sa = e) : "";
  });

  let [cityNumber, setSetyNumber] = useState("1");
  let [eE, setE] = useState(sa);

  useEffect(() => {
    shahars.forEach((e) => {
      e.id == cityNumber ? setE(e) : "";
    });
  }, [cityNumber]);

  return (
    <div className="taqvims">
      <div className="container ">
        <select
          id="citys"
          onChange={(e) => {
            setSetyNumber(e.target.value);
          }}
        >
          <option value="1">Toshkent</option>
          <option value="10">Termiz</option>
          <option value="7">Namangan</option>
          <option value="3">Farg'ona</option>
          <option value="9">Samarqand</option>
          <option value="11">Qarshi</option>
          <option value="2">Buxoro</option>
          <option value="13">Xiva</option>
          <option value="8">Nukus</option>
          <option value="6">Navoiy</option>
          <option value="4">Guliston</option>
          <option value="5">Jizzax</option>
          <option value="12">Andijon</option>
        </select>

        <div className="taqvimJadval">
          <table className="tableTaqvim">
            <tr>
              <th>Ro'za kunlari</th>
              <th>Sana</th>
              <th>Hafta kuni</th>
              <th>Saharlik</th>
              <th>Iftorlik</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{eE.viloyat.kun1.sana} </td>
              <td>{eE.viloyat.kun1.haftaKuni}</td>
              <td>{eE.viloyat.kun1.saharlik}</td>
              <td>{eE.viloyat.kun1.iftorlik}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{eE.viloyat.kun2.sana}</td>
              <td>{eE.viloyat.kun2.haftaKuni}</td>
              <td>{eE.viloyat.kun2.saharlik}</td>
              <td>{eE.viloyat.kun2.iftorlik}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{eE.viloyat.kun3.sana}</td>
              <td>{eE.viloyat.kun3.haftaKuni}</td>
              <td>{eE.viloyat.kun3.saharlik}</td>
              <td>{eE.viloyat.kun3.iftorlik}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{eE.viloyat.kun4.sana}</td>
              <td>{eE.viloyat.kun4.haftaKuni}</td>
              <td>{eE.viloyat.kun4.saharlik}</td>
              <td>{eE.viloyat.kun4.iftorlik}</td>
            </tr>
            <tr className="TaqvimJuma">
              <td>5</td>
              <td>{eE.viloyat.kun5.sana}</td>
              <td>{eE.viloyat.kun5.haftaKuni}</td>
              <td>{eE.viloyat.kun5.saharlik}</td>
              <td>{eE.viloyat.kun5.iftorlik}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>{eE.viloyat.kun6.sana} </td>
              <td>{eE.viloyat.kun6.haftaKuni}</td>
              <td>{eE.viloyat.kun6.saharlik}</td>
              <td>{eE.viloyat.kun6.iftorlik}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>{eE.viloyat.kun7.sana}</td>
              <td>{eE.viloyat.kun7.haftaKuni}</td>
              <td>{eE.viloyat.kun7.saharlik}</td>
              <td>{eE.viloyat.kun7.iftorlik}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>{eE.viloyat.kun8.sana}</td>
              <td>{eE.viloyat.kun8.haftaKuni}</td>
              <td>{eE.viloyat.kun8.saharlik}</td>
              <td>{eE.viloyat.kun8.iftorlik}</td>
            </tr>
            <tr>
              <td>9</td>
              <td>{eE.viloyat.kun9.sana}</td>
              <td>{eE.viloyat.kun9.haftaKuni}</td>
              <td>{eE.viloyat.kun9.saharlik}</td>
              <td>{eE.viloyat.kun9.iftorlik}</td>
            </tr>
            <tr>
              <td>10</td>
              <td>{eE.viloyat.kun10.sana}</td>
              <td>{eE.viloyat.kun10.haftaKuni}</td>
              <td>{eE.viloyat.kun10.saharlik}</td>
              <td>{eE.viloyat.kun10.iftorlik}</td>
            </tr>
            <tr>
              <td>11</td>
              <td>{eE.viloyat.kun11.sana} </td>
              <td>{eE.viloyat.kun11.haftaKuni}</td>
              <td>{eE.viloyat.kun11.saharlik}</td>
              <td>{eE.viloyat.kun11.iftorlik}</td>
            </tr>
            <tr className="TaqvimJuma">
              <td >12</td>
              <td>{eE.viloyat.kun12.sana}</td>
              <td>{eE.viloyat.kun12.haftaKuni}</td>
              <td>{eE.viloyat.kun12.saharlik}</td>
              <td>{eE.viloyat.kun12.iftorlik}</td>
            </tr>
            <tr>
              <td>13</td>
              <td>{eE.viloyat.kun13.sana}</td>
              <td>{eE.viloyat.kun13.haftaKuni}</td>
              <td>{eE.viloyat.kun13.saharlik}</td>
              <td>{eE.viloyat.kun13.iftorlik}</td>
            </tr>
            <tr>
              <td>14</td>
              <td>{eE.viloyat.kun14.sana}</td>
              <td>{eE.viloyat.kun14.haftaKuni}</td>
              <td>{eE.viloyat.kun14.saharlik}</td>
              <td>{eE.viloyat.kun14.iftorlik}</td>
            </tr>
            <tr>
              <td>15</td>
              <td>{eE.viloyat.kun15.sana}</td>
              <td>{eE.viloyat.kun15.haftaKuni}</td>
              <td>{eE.viloyat.kun15.saharlik}</td>
              <td>{eE.viloyat.kun15.iftorlik}</td>
            </tr>
            <tr>
              <td>16</td>
              <td>{eE.viloyat.kun16.sana} </td>
              <td>{eE.viloyat.kun16.haftaKuni}</td>
              <td>{eE.viloyat.kun16.saharlik}</td>
              <td>{eE.viloyat.kun16.iftorlik}</td>
            </tr>
            <tr>
              <td>17</td>
              <td>{eE.viloyat.kun17.sana}</td>
              <td>{eE.viloyat.kun17.haftaKuni}</td>
              <td>{eE.viloyat.kun17.saharlik}</td>
              <td>{eE.viloyat.kun17.iftorlik}</td>
            </tr>
            <tr>
              <td>18</td>
              <td>{eE.viloyat.kun18.sana}</td>
              <td>{eE.viloyat.kun18.haftaKuni}</td>
              <td>{eE.viloyat.kun18.saharlik}</td>
              <td>{eE.viloyat.kun18.iftorlik}</td>
            </tr>
            <tr className="TaqvimJuma">
              <td>19</td>
              <td>{eE.viloyat.kun19.sana}</td>
              <td>{eE.viloyat.kun19.haftaKuni}</td>
              <td>{eE.viloyat.kun19.saharlik}</td>
              <td>{eE.viloyat.kun19.iftorlik}</td>
            </tr>
            <tr>
              <td>20</td>
              <td>{eE.viloyat.kun20.sana}</td>
              <td>{eE.viloyat.kun20.haftaKuni}</td>
              <td>{eE.viloyat.kun20.saharlik}</td>
              <td>{eE.viloyat.kun20.iftorlik}</td>
            </tr>
            <tr>
              <td>21</td>
              <td>{eE.viloyat.kun21.sana} </td>
              <td>{eE.viloyat.kun21.haftaKuni}</td>
              <td>{eE.viloyat.kun21.saharlik}</td>
              <td>{eE.viloyat.kun21.iftorlik}</td>
            </tr>
            <tr>
              <td>22</td>
              <td>{eE.viloyat.kun22.sana}</td>
              <td>{eE.viloyat.kun22.haftaKuni}</td>
              <td>{eE.viloyat.kun22.saharlik}</td>
              <td>{eE.viloyat.kun22.iftorlik}</td>
            </tr>
            <tr>
              <td>23</td>
              <td>{eE.viloyat.kun23.sana}</td>
              <td>{eE.viloyat.kun23.haftaKuni}</td>
              <td>{eE.viloyat.kun23.saharlik}</td>
              <td>{eE.viloyat.kun23.iftorlik}</td>
            </tr>
            <tr>
              <td>24</td>
              <td>{eE.viloyat.kun24.sana}</td>
              <td>{eE.viloyat.kun24.haftaKuni}</td>
              <td>{eE.viloyat.kun24.saharlik}</td>
              <td>{eE.viloyat.kun24.iftorlik}</td>
            </tr>
            <tr>
              <td>25</td>
              <td>{eE.viloyat.kun25.sana}</td>
              <td>{eE.viloyat.kun25.haftaKuni}</td>
              <td>{eE.viloyat.kun25.saharlik}</td>
              <td>{eE.viloyat.kun25.iftorlik}</td>
            </tr>
            <tr className="TaqvimJuma">
              <td>26</td>
              <td>{eE.viloyat.kun26.sana} </td>
              <td>{eE.viloyat.kun26.haftaKuni}</td>
              <td>{eE.viloyat.kun26.saharlik}</td>
              <td>{eE.viloyat.kun26.iftorlik}</td>
            </tr>
            <tr>
              <td>27</td>
              <td>{eE.viloyat.kun27.sana}</td>
              <td>{eE.viloyat.kun27.haftaKuni}</td>
              <td>{eE.viloyat.kun27.saharlik}</td>
              <td>{eE.viloyat.kun27.iftorlik}</td>
            </tr>
            <tr>
              <td>28</td>
              <td>{eE.viloyat.kun28.sana}</td>
              <td>{eE.viloyat.kun28.haftaKuni}</td>
              <td>{eE.viloyat.kun28.saharlik}</td>
              <td>{eE.viloyat.kun28.iftorlik}</td>
            </tr>
            <tr>
              <td>29</td>
              <td>{eE.viloyat.kun29.sana}</td>
              <td>{eE.viloyat.kun29.haftaKuni}</td>
              <td>{eE.viloyat.kun29.saharlik}</td>
              <td>{eE.viloyat.kun29.iftorlik}</td>
            </tr>
            <tr>
              <td>30</td>
              <td>{eE.viloyat.kun30.sana}</td>
              <td>{eE.viloyat.kun30.haftaKuni}</td>
              <td>{eE.viloyat.kun30.saharlik}</td>
              <td>{eE.viloyat.kun30.iftorlik}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Taqvim;
