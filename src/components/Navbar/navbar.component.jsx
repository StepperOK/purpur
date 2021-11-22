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
          {/* City popup */}

          <Popup
            trigger={<button className="button"> Контакты </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="modal_exit" onClick={close}>
                  &times;
                </button>
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
                <div className="header">
                  {" "}
                  <h1>Наши контакты</h1>{" "}
                </div>
                <div className="content">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel
                  eveniet quibusdam voluptates delectus doloremque, explicabo
                  tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur sit commodi beatae optio voluptatum sed eius
                  cumque, delectus saepe repudiandae explicabo nemo nam libero
                  ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <button
                    className="modal_btn"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    закрыть
                  </button>
                </div>
              </div>
            )}
          </Popup>

          <li type="text" className="button" onClick={() => setOpen((o) => !o)}>
            Ваш город
          </li>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div id="modal-window" className="modal-city">
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
                <h1>Выберете ваш город</h1>
              </div>
              <div id="modal-body">
                <div className="h5 modal-top-city d-flex flex-wrap justify-content-center align-items-center">
                  <a href="/moskva">Москва</a>
                  <a href="/tolyatti">Тольятти</a>
                  <a href="/samara">Самара</a>
                  <a href="/kazan">Казань</a>
                  <a href="/tyumen">Тюмень</a>
                </div>
                <hr />
               <ul id="all-cityes">

               <li>
                    <span>А</span>
                    <ul class="ulul">
                        <li>
                            <a href="/almetevsk">Альметьевск</a>
                        </li>
                    
                <li>
                    <a href="/arhangelsk">Архангельск</a>
                </li>
            
                <li>
                    <a href="/astrahan">Астрахань</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Б</span>
                    <ul class="ulul">
                        <li>
                            <a href="/balashiha">Балашиха</a>
                        </li>
                    
                <li>
                    <a href="/barnaul">Барнаул</a>
                </li>
            
                <li>
                    <a href="/belgorod">Белгород</a>
                </li>
            
                <li>
                    <a href="/bryansk">Брянск</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>В</span>
                    <ul class="ulul">
                        <li>
                            <a href="/vladivostok">Владивосток</a>
                        </li>
                    
                <li>
                    <a href="/vladikavkaz">Владикавказ</a>
                </li>
            
                <li>
                    <a href="/vladimir">Владимир</a>
                </li>
            
                <li>
                    <a href="/volgograd">Волгоград</a>
                </li>
            
                <li>
                    <a href="/volzhsk">Волжск</a>
                </li>
            
                <li>
                    <a href="/vologda">Вологда</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Г</span>
                    <ul class="ulul">
                        <li>
                            <a href="/grozny">Грозный</a>
                        </li>
                    </ul>
                </li>
            
                <li>
                    <span>Е</span>
                    <ul class="ulul">
                        <li>
                            <a href="/ekaterinburg">Екатеринбург</a>
                        </li>
                    </ul>
                </li>
            
                <li>
                    <span>И</span>
                    <ul class="ulul">
                        <li>
                            <a href="/ivanovo">Иваново</a>
                        </li>
                    
                <li>
                    <a href="/izhevsk">Ижевск</a>
                </li>
            
                <li>
                    <a href="/irkutsk">Иркутск</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Й</span>
                    <ul class="ulul">
                        <li>
                            <a href="/joshkar-ola">Йошкар-Ола</a>
                        </li>
                    </ul>
                </li>
            
                <li>
                    <span>К</span>
                    <ul class="ulul">
                        <li>
                            <a href="/kazan">Казань</a>
                        </li>
                    
                <li>
                    <a href="/kaliningrad">Калининград</a>
                </li>
            
                <li>
                    <a href="/kaluga">Калуга</a>
                </li>
            
                <li>
                    <a href="/kemerovo">Кемерово</a>
                </li>
            
                <li>
                    <a href="/kirov">Киров</a>
                </li>
            
                <li>
                    <a href="/krasnodar">Краснодар</a>
                </li>
            
                <li>
                    <a href="/krasnoyarsk">Красноярск</a>
                </li>
            
                <li>
                    <a href="/kurgan">Курган</a>
                </li>
            
                <li>
                    <a href="/kursk">Курск</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Л</span>
                    <ul class="ulul">
                        <li>
                            <a href="/lipeck">Липецк</a>
                        </li>
                    </ul>
                </li>
            
                <li>
                    <span>М</span>
                    <ul class="ulul">
                        <li>
                            <a href="/magnitogorsk">Магнитогорск</a>
                        </li>
                    
                <li>
                    <a href="/mahachkala">Махачкала</a>
                </li>
            
                <li>
                    <a href="">Москва</a>
                </li>
            
                <li>
                    <a href="/murmansk">Мурманск</a>
                </li>
            
                <li>
                    <a href="/mytischi">Мытищи</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Н</span>
                    <ul class="ulul">
                        <li>
                            <a href="/naberezhnye-chelny">Набережные Челны</a>
                        </li>
                    
                <li>
                    <a href="/nizhnevartovsk">Нижневартовск</a>
                </li>
            
                <li>
                    <a href="/nizhnekamsk">Нижнекамск</a>
                </li>
            
                <li>
                    <a href="/nizhny-novgorod">Нижний Новгород</a>
                </li>
            
                <li>
                    <a href="/nizhnij-tagil">Нижний Тагил</a>
                </li>
            
                <li>
                    <a href="/novokuzneck">Новокузнецк</a>
                </li>
            
                <li>
                    <a href="/novorossiysk">Новороссийск</a>
                </li>
            
                <li>
                    <a href="/novosibirsk">Новосибирск</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>О</span>
                    <ul class="ulul">
                        <li>
                            <a href="/omsk">Омск</a>
                        </li>
                    
                <li>
                    <a href="/orel">Орёл</a>
                </li>
            
                <li>
                    <a href="/orenburg">Оренбург</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>П</span>
                    <ul class="ulul">
                        <li>
                            <a href="/penza">Пенза</a>
                        </li>
                    
                <li>
                    <a href="/perm">Пермь</a>
                </li>
            
                <li>
                    <a href="/petrozavodsk">Петрозаводск</a>
                </li>
            
                <li>
                    <a href="/podolsk">Подольск</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Р</span>
                    <ul class="ulul">
                        <li>
                            <a href="/rostov-on-don">Ростов-на-Дону</a>
                        </li>
                    
                <li>
                    <a href="/ryazan">Рязань</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>С</span>
                    <ul class="ulul">
                        <li>
                            <a href="/samara">Самара</a>
                        </li>
                    
                <li>
                    <a href="/saint-petersburg">Санкт-Петербург</a>
                </li>
            
                <li>
                    <a href="/saransk">Саранск</a>
                </li>
            
                <li>
                    <a href="/saratov">Саратов</a>
                </li>
            
                <li>
                    <a href="/sevastopol">Севастополь</a>
                </li>
            
                <li>
                    <a href="/smolensk">Смоленск</a>
                </li>
            
                <li>
                    <a href="/sochi">Сочи</a>
                </li>
            
                <li>
                    <a href="/stavropol">Ставрополь</a>
                </li>
            
                <li>
                    <a href="/sterlitamak">Стерлитамак</a>
                </li>
            
                <li>
                    <a href="/surgut">Сургут</a>
                </li>
            
                <li>
                    <a href="/syktyvkar">Сыктывкар</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Т</span>
                    <ul class="ulul">
                        <li>
                            <a href="/tambov">Тамбов</a>
                        </li>
                    
                <li>
                    <a href="/tver">Тверь</a>
                </li>
            
                <li>
                    <a href="/tolyatti">Тольятти</a>
                </li>
            
                <li>
                    <a href="/tomsk">Томск</a>
                </li>
            
                <li>
                    <a href="/tula">Тула</a>
                </li>
            
                <li>
                    <a href="/tyumen">Тюмень</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>У</span>
                    <ul class="ulul">
                        <li>
                            <a href="/ulan-ude">Улан-Удэ</a>
                        </li>
                    
                <li>
                    <a href="/ulyanovsk">Ульяновск</a>
                </li>
            
                <li>
                    <a href="/ufa">Уфа</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Х</span>
                    <ul class="ulul">
                        <li>
                            <a href="/habarovsk">Хабаровск</a>
                        </li>
                    
                <li>
                    <a href="/himki">Химки</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Ч</span>
                    <ul class="ulul">
                        <li>
                            <a href="/cheboksary">Чебоксары</a>
                        </li>
                    
                <li>
                    <a href="/chelyabinsk">Челябинск</a>
                </li>
            
                <li>
                    <a href="/cherepovec">Череповец</a>
                </li>
            
                <li>
                    <a href="/chita">Чита</a>
                </li>
            </ul>
                </li>
            
                <li>
                    <span>Я</span>
                    <ul class="ulul">
                        <li>
                            <a href="/yaroslavl">Ярославль</a>
                        </li>
                    </ul>
                </li>


               </ul>
              </div>
              <div className="button">
                <button
                  type="button"
                  className="modal_btn"
                  onClick={closeModal}
                >
                  Закрыть
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
