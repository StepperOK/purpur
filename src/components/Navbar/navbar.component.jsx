import React from "react";
import logo from "../../image/logo.png";
import "./navbar.styles.scss";

const Navbar = () => {
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
        <button>Связаться</button>
      </nav>
    </div>
  );
};

export default Navbar;
