import React from "react";
import "./ContactinfoCard.css";

const ContactinfoCard = ({ iconUrl, text }) => {
  return;
  <div className="contact-detail-card">
    <div className="icon">
      <img src={iconUrl} alt={text} />
    </div>

    <p>{text}</p>
    <h1>Test text from contact info card</h1>
    <h1>Hi</h1>
  </div>;
};

export default ContactinfoCard;
