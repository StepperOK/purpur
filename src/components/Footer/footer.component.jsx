import React from "react";
import "./footer.style.scss";

import MainImg from "../../image/logo.png";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="logos">
          <div className="brand">
            <img src={MainImg} alt="" />
            <h2>somyka</h2>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <h3>Подписаться на нас</h3>

          <div className="social-icons">
            <span>
              <TwitterIcon />
            </span>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <PinterestIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
          </div>
        </div>
        <div className="useful">
          <h3>Полезные ссылки</h3>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Блог</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Сообщество</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; MarketPlace</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Вакансии</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; О нас</li>
        </div>
        <div className="imp">
          <h3>Важные ссылки</h3>
          <li>&#10148;&nbsp;&nbsp;&nbsp; О нас</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Наша компания</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Портфолио</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Политика конфиденциальности</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Связаться с нами</li>
        </div>
        <div className="subscribe">
          <h3>Подписаться на рассылку</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolorem ea earum
          </p>

          <input type="text" placeholder="Введите Ваш Email" />
          <button>Подписаться</button>
        </div>
      </div>

      <hr />
      <div className="copyright">
        <p>Copyright &copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
