import React from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import lineImage from "./images/line.png"

const Products = () => {
  return (
    <section className="product-wrapper">
      {/* header section start */}
      <header className="product-header">
        <h1>Menu</h1>
      </header>
      <div className="line-img">
      <img src={lineImage} alt=""/>
      </div>
      {/* headersection end */}

      {/* product layout  start*/}
      <div>
        <h3>Our Exclusive Intercontinental dish</h3>
        <section className="products">
          <ProductCard image="./Images/img1.jpg" productName="Fish Mixed" />
          <ProductCard image="./Images/img2.jpg" productName="Veg Lobster" />
          <ProductCard image="./Images/img3.jpg" productName="Fruits Lobster" />
        </section>

        <h3>Our Exclusive Local dish</h3>
        <section className="products">
          <ProductCard image="./Images/img4.jpg" productName="Tandoor Chicken" />
          <ProductCard image="./Images/img5.jpg" productName="Pani Puri" />
          <ProductCard image="./Images/img6.jpg" productName="Tikka Chicken" />
        </section>
        <h3>Our Exclusive deserts</h3>
        <section className="products">
          <ProductCard image="./Images/img7.jpg" productName="Thin Mint Mix" />
          <ProductCard image="./Images/img8.jpg" productName="Chocolate Molten" />
          <ProductCard image="./Images/img9.jpg" productName="Mocha Brownie Fruit Cake" />
        </section>
      </div>
      {/* Product layout ends */}
    </section>
  );
};

export default Products;

