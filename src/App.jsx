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

function App() {
  const [count, setCount] = useState(0);
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <MyContext.Provider value={{}}>
      <Router>
        <Header />
        <main className="flex-grow ">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/taqvim" element={<Taqvim />} />
            <Route path="/surah" element={<Surah />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </MyContext.Provider>
  );
}

export default App;
