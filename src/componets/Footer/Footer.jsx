import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
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
            <h4>Мы в социальных сетях:</h4>
            <div>
              <img src="images/yt.png" alt="" />
              <img src="images/inst.png" alt="" />
              <img src="images/vk.png" alt="" />
              <img src="images/wt.png" alt="" />
              <img src="images/tg.png" alt="" />
            </div>
          </ul>
        </div>
        <div className="footer-inner">
          <div>
            <p>ПРОДУКЦИЯ</p>
            <a href="">Каркасные дома</a>
            <a href="">Модульные дома</a>
            <a href="">Бани “Под ключ”</a>
            <a href="">Беседки</a>
            <a href="">Бытовки (утепленные)</a>
            <a href="">
              Хоз. постройки <br />
              (без утепления)
            </a>
          </div>
          <div>
            <p>КОМПЛЕКТАЦИЯ</p>
            <a href="">Комплектация домов</a>
            <a href="">Комплектация бань</a>
            <a href="">Комплектация беседок</a>
            <a href="">Комплектация бытовок</a>
            <a href="">
              Комплектация <br /> хоз. построек
            </a>
          </div>
          <div>
            <p>ЗАКАЗЧИКУ</p>
            <a href="">
              Индивидуальное <br /> строительство
            </a>
            <a href="">Фиксированные цены</a>
            <a href="">
              Дистанционное <br /> оформление договора
            </a>
            <a href="">Материнский капитал</a>
            <a href="">Порядок оплаты</a>
            <a href="">Процесс заказа</a>
          </div>
          <div>
            <p>ПОЛЕЗНО</p>
            <a href="">Доставка и сборка</a>
            <a href="">Контакты</a>
            <a href="">Наши работы</a>
          </div>
          <div>
            <button>ЧЕСТНЫЙ КАЛЬКУЛЯТОР <br /> БЕСЕДОК</button>
            <button>СВЯЗАТЬСЯ С НАМИ</button>
          </div>
        </div>
      </div>
        <div className="footer-bot">
          Copyright © “ДОМСТРОЙ” 2022. Все права защищены.
          <ul>
            <a href="">Политика конфиденциальности</a>
            <a href="">Пользовательское соглашение</a>
            <a href="">Cookies</a>
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
