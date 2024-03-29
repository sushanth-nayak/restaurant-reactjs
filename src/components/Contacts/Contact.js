import React from "react";
import "./Contact.css";
import lineImage from "./images/line.png"

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <img className="line-about" src={lineImage} alt=""/>
      <div className="online-reserve">
      <h1>FOR ONLINE RESERVATION</h1>
      <p>(Fill this form)</p>
      </div>
      <form>
        <div className="contact-info">
          <input type="text" placeholder="Your Name" name="Your Name" />
          <input type="email" placeholder="Your Email" name="Your Email" />
        </div>
        <input type="text" name="subject" id="subject" placeholder="subject" />
        <textarea rows="5" placeholder="Your Message" name="Your Message" />
        <button className="btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;

