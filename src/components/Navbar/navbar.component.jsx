import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import logo from "../../image/logo.png";
import "./navbar.styles.scss";

function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

const togglePopup = () => {
  setShowPopup(!showPopup);
};

const closeModal = (e) => {
  console.log(e.target.className);
  if (e.target.className === "popup") {
    togglePopup();
  }
};

  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="Logo of Website" />
        <label>somyka</label>
      </div>

      <nav>
        <li>Главная</li>
        <li>О нас</li>
        <li>Проекты</li>
        <li>Преимущества</li>
        <button className="open" onClick={togglePopup}>
        Связаться
        </button>
        {showPopup ? (
          <div className="popup" onClick={(e) => closeModal(e)}>
            <div className="popup_inner">
              <h2>Контакты</h2>
              <div className="close" onClick={togglePopup}>
                Х
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
