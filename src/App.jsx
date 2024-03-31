import * as React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
export const MyContext = React.createContext(null);
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./style/main.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Taqvim from "./components/Taqvim";
import Surah from "./components/Surah";
import NamozVaqti from "./components/NamozVaqt";
import Ibodat from "./components+/RozaQandayIbodat";
import Daraja from "./components+/RozaningDarajalari";
import Shartlari from "./components+/RozaningShartlari";
import Turlari from "./components+/RozaningTurlari";
import axios from "axios";
import Kitoblar from "./components+/Kitoblar";

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <MyContext.Provider value={{ menuOpen, setMenuOpen }}>
      <Router>
        <Header />
        <main className="flex-grow ">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/taqvim" element={<Taqvim />} />
            <Route path="/surah" element={<Surah />} />
            <Route path="/surah/savol1" element={<Ibodat />} />
            <Route path="/surah/savol2" element={<Daraja />} />
            <Route path="/surah/savol3" element={<Shartlari />} />
            <Route path="/surah/savol4" element={<Turlari />} />
            <Route path="/namozvaqti" element={<NamozVaqti />} />
            <Route path="/kitoblar" element={<Kitoblar />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
}

export default App;
