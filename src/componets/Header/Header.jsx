import React from "react";
import "./Header.scss";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-title_block">
          <ul className="logo-block">
            <li>СТРОИТЕЛЬНАЯ КОМПАНИЯ</li>
            <img src="images/logo.png" alt="" />
          </ul>
          <ul className="addres">
            <li>
              Пишите нам:<a href="">domstroy-st@bk.ru</a>
            </li>
            <li>Моск.обл. г.Ступино ул.Промышленная </li>
            <li>Пн-Сб 9:00-18:00, Вс - выходной</li>
          </ul>
          <ul className="contact-block">
            <a href="">+7 (495) 142-07-25</a>
            <a href="">+7 (977) 908-02-50</a>
          </ul>
          <ul className="button-block">
            <button>Заказать звонок</button>
            <div>
              <img src="images/yt.png" alt="" />
              <img src="images/inst.png" alt="" />
              <img src="images/vk.png" alt="" />
              <img src="images/wt.png" alt="" />
              <img src="images/tg.png" alt="" />
            </div>
          </ul>
        </div>
      </div>
      <div className="header-blue-block header-long_block">
        <nav>
          <a href="">Главная</a>
          <a href="">Комплектация</a>
          <a href="">Заказчику</a>
          <a href="">Доставка и сборка</a>
          <a href="">Наши работы</a>
          <a href="">Контакты</a>
        </nav>
      </div>
      <div className="header-purple-block header-long_block">
        <nav>
          <a href="">Каталог домов</a>
          <div className="line-header"></div>
          <a href="">Каталог бытовок</a>
          <div className="line-header"></div>
          <a href="">Каталог беседок</a>
          <div className="line-header"></div>
          <a href="">Каталог бань</a>
          <div className="line-header"></div>
          <a href="">Каталог хоз. построек</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
