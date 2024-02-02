import React from "react";
import "../About/About.css";
import lineImage from "./images/line.png"

function About() {
  return (
    <>
      <header className="about-header">
        <div className="about">
          <h1>About</h1>
        </div>
      </header>

      <img className="line-about" src={lineImage} alt=""/>

      <main>
        <section className="flex">
          <div className="image1"></div>
          <div className="about-info">
            <h2>
              Welcome to Food <br />
              Palace Restaurant
            </h2>
            <p>
            Welcome to Hungry Head, where culinary excellence meets heartfelt hospitality. Nestled in the heart of Mangalore, our restaurant prides itself on serving delectable dishes crafted with locally sourced ingredients and infused with flavors that delight the senses. With a dedication to creating unforgettable dining experiences, we invite you to savor every moment and indulge in a culinary journey that celebrates the art of food and community.
            </p>
            <button>EXPLORE</button>
          </div>
        </section>
        <section className="flex flex-reverse">
          <div className="image2"></div>
          <div className="about-info">
            <h2>
              Discover our <br />
              Restaurant Story
            </h2>
            <p>Inaugurated in 2001, Hungry Head has been a culinary cornerstone in Mangalore for 23 years. Our journey began with a passion for gastronomy and a commitment to offering exceptional dining experiences. Over the years, we've evolved, innovated, and garnered a loyal following, becoming a beloved destination for locals and visitors alike. Today, as we reflect on our rich history, we remain dedicated to upholding our tradition of culinary excellence and welcoming patrons to create new memories with us..
            </p>
            <button>READ MORE</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;

