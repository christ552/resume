import React, { useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard/SkillCard";
import { SKILLS } from "../../utils/data";
import SkillsinfoCard from "./SkilinfoCard/SkillsinfoCard";
import WorkExperience from "../Experience/WorkExperience";
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-container mb-sm-5">
      {/* ======================= */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-white text-center fs-1">
              Compétence technique
            </h2>
          </div>
        </div>
      </div>
      {/* ============================ */}
      <div className="skills-content row">
        <div className="row">
          <div className="skills col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
            {SKILLS.map((item) => (
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>
          <div className="skills-info col-sx-12 col-sm-12 col-md-6">
            <SkillsinfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
          {/* <div className="col">
            <WorkExperience />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
