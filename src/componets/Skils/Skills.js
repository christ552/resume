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
    <section className="skills-container container">
      {/* ======================= */}
      {/* <div className="container"> */}
      <div className="row">
        <div className="col">
          <h2 className="text-white text-center fs-1 my-5 text-decoration-underline">
            Compétence technique
          </h2>
        </div>
      </div>
      {/* </div> */}
      {/* ============================ */}
      <div className="skills-content row">
        {/* <div className="row"> */}
        <div className="skills col">
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
        <div className="skills-info col">
          <SkillsinfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
        {/* <div className="col">
            <WorkExperience />
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Skills;
