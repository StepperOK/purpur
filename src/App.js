import React from "react";
import "./App.css";
import MainImg from "./image/main.png";

import useWebAnimations from "@wellyshen/use-web-animations";

import Navbar from "./components/Navbar/navbar.component";
import HeroText from "./components/HeroText/heroText.component";
import Containers from "./components/containers/containers.component";
import Footer from "./components/Footer/footer.component";

function App() {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateY(-25px)" },
      { transform: "translateY(75px)" },
    ],
    timing: {
      delay: 500,
      duration: 1000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="image">
        <img
          ref={ref}
          onMouseEnter={() => getAnimation().pause()}
          onMouseOut={() => getAnimation().play()}
          src={MainImg}
          alt="Illustrated svg"
        />
      </div>
      <Navbar />
      <HeroText />

      <Containers />

      <Footer />
    </div>
  );
}

export default App;
