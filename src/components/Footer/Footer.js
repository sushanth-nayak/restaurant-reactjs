import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
    <footer>
      <div className="footer">
         <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Hungry Head</span> 
              </li>
              <li>
                We offers variety of delecious food in a reasonable price.
              </li>
              <li>
                <a href="tel:123456789">
                 &nbsp;(+91) 0123456789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                sushanthnayak.in@gmail.com"
                >
                  &nbsp;hungryhead@gmail.com
                </a>
              </li>

              <li className="sushanth-nayak">
                <p
                  style={{ fontSize: "18px" }}
                >
                   Designed by Sushanth Nayak
                </p>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li className="footer-heading">Company</li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Menu</a>
              </li>
              <li>
                <a href="#home">About</a>
              </li>
              <li>
                <a href="#home">Contact</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li className="footer-heading">Working Hours</li>
              <li>Mon - Fri: 11:00AM - 9:00PM</li>
              <li>Sat & Sun: 11:00AM - 11:00PM</li>
            </ul>

            <ul className="footer-content__2">
              <li className="footer-heading">Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li className="footer-input">
                <input className="input" type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">SUBMIT</button>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;

