import React from "react";
import "./containers.style.scss";

import icon from "../../image/icon.jpg";
import icon1 from "../../image/icon1.jpg";
import icon2 from "../../image/icon2.jpg";
import Card from "../card/card.component";
import Box1 from "../box1/box1.component";
import Box2 from "../box2/box2.component";
import Box3 from "../box3/box3.component";
import News from "../NewsCard/news.component";

const Containers = () => {
  return (
    <div className="container">
      <div className="cards">
        <Card
          img={icon}
          heading="Оптимизируем производительность"
          info="Adipisicing elit, sed do eiusmod tempor incid with labore et dolore magna aliqua.awesome creative design for you"
        />
        <Card
          img={icon1}
          heading="Без выходных"
          info="Adipisicing elit, sed do eiusmod tempor incid with labore et dolore magna aliqua.awesome creative design for you"
        />
        <Card
          img={icon2}
          heading="24/7 поддержка"
          info="Adipisicing elit, sed do eiusmod tempor incid with labore et dolore magna aliqua.awesome creative design for you"
        />
      </div>

      <Box1 />
      <Box2 />
      <Box3 />

      <h1 className="latest-news">Новости</h1>
      <p className="paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
        dolorem aut illum .
      </p>

      <div className="newsContainer">
        <News
          image="https://32.img.avito.st/640x480/8657895532.jpg"
          heading="Услуги web - дизайнера"
        />
        <News
          image="https://softup.com.ua/wp-content/uploads/2019/10/24.jpg"
          heading="1с поддержка"
        />
        <News
          image="https://www.it-courses.by/wp-content/uploads/2018/06/20-Most-Common-Work-from-Home-Job-Titles.jpg"
          heading="Web - разработка"
        />
      </div>
    </div>
  );
};

export default Containers;
