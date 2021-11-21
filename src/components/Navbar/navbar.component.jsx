import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import logo from "../../image/logo.png";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="header">
      <div className="toolbar"></div>
      <div className="navbar">
        <div>
          <img src={logo} alt="Logo of Website" />
          <label>somyka</label>
        </div>
        <nav>
          <div className="button">
            <button
              type="button"
              className="button"
              onClick={() => setOpen((o) => !o)}
            >
              Контакты
            </button>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal">
                <span className="modal_exit">
                  <svg
                    type="button"
                    onClick={closeModal}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 0,0 L 20,20 M 20,0 L 0,20" stroke="black" />
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="modal__title">
                  <h1>Наши контакты</h1>
                </div>
                <div className="modal__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iste, praesentium aspernatur. Laudantium natus est numquam
                  veniam dolorem nobis et quibusdam. Quisquam atque a iure hic
                  accusantium eum voluptas ipsa voluptatum.
                </div>
                <div className="button">
                  <button
                    type="button"
                    className="modal_btn"
                    onClick={closeModal}
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </Popup>
          </div>


          
            <li
              type="text"
              className="button"
              onClick={() => setOpen((o) => !o)}
            >
              Ваш город
            </li>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal">
                <span className="modal_exit">
                  <svg
                    type="button"
                    onClick={closeModal}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 0,0 L 20,20 M 20,0 L 0,20" stroke="black" />
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="modal__title">
                  <h1>Наши контакты</h1>
                </div>
                <div className="modal__text">
                  Lorem 
                </div>
                <div className="button">
                  <button
                    type="button"
                    className="modal_btn"
                    onClick={closeModal}
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </Popup>
          

        </nav>
        <nav>
          <li>Главная</li>
          <li>О нас</li>
          <li>Проекты</li>
          <li>Преимущества</li>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
