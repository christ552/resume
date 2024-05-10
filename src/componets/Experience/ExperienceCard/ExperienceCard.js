import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="work-experience-card container-fluide">
      <div className="row row-experience">
        <h4 className="row">{details.title}</h4>

        <div className="work-duration">{details.date}</div>
        <ul className="col">
          {details.resp.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
