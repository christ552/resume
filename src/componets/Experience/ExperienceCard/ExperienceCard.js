import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card container">
      <div className="row">
        <h4>{details.title}</h4>

        <div className="work-duration">{details.date}</div>
        <ul>
          {details.resp.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
