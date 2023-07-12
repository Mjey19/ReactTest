import React from "react";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import { Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="header-section">
          <img className="header-back" src="images/headerback.png" alt="" />
          <div className="container">
            <div className="header-title-block">
              <p>СТРОИТЕЛЬСТВО ДАЧНЫХ ДОМОВ И КОТТЕДЖЕЙ</p>
              <h4>
                На участок поставляются готовые модули, производится их монтаж в
                короткие сроки. Мы гарантируем выполнение всех взятых на себя
                обязательств и доступные цены.
              </h4>
              <ul>
                <img src="images/arrowheader.svg" alt="" />
                <span>РАССЧИТАТЬ СТОИМОСТЬ</span>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
