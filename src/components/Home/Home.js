import React from "react";
import handFlower from "./images/main-home.png";
import "./Home.css";
import line1 from "./images/line1.png"

function Home() {
  return (
    <>
    <div className="line1"><img src={line1} alt="none"/></div>
    <div className="home-outside">
    <div className="home">
      <div className="home-description">
        <h1 className="description">Where Every <span className="head-stomach">Bite</span> Tells a Story of<span className="head-stomach"> Passion</span></h1>
        <p>At our restaurant, "Where Every Bite Tells a Story of Passion," we believe that every dish we serve is a manifestation of our dedication and love for food. Each recipe is meticulously crafted with care and attention to detail, using the finest ingredients sourced from local farmers and producers. From the first bite to the last, our culinary creations aim to evoke emotions and memories, transporting diners on a gastronomic journey of flavors and textures.</p>
      </div>
      <div className="img">
        <img className="img-pic" src={handFlower} alt="Hand holding flower" />
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Home;

