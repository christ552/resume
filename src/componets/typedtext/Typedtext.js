import React from "react";
import "../typedtext/Typedtext.css";
import { ReactTyped } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";

const Typedtext = () => {
  return (
    <>
      <div className="typedtext_anim container">
        <h1 className="tx">Les compétences</h1>
        <ReactTyped
          className="typed_text"
          strings={[
            "Développeur front-end",
            "HTML, CSS, javascript",
            "React, Angular",
            "Développeur back-end",
            "Développer en PHP",
            "Le framework Symfony",
            "Forte autonomie dans le travail personnel",
            "Jira, Git/Github",
            "Capacité à travailler en équipe",
            "Capacité à apprendre rapidement",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </>
  );
};

export default Typedtext;
