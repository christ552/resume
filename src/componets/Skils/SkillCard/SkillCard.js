import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className={`skills-card ${isActive ? "active" : ""}`}
          onClick={() => onClick()}
        >
          <div className="skill-icon">
            <img src={iconUrl} alt={title} className="icon" />
          </div>

          <span className="fs-4">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
