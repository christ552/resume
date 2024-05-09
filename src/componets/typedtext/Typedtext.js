import React from "react";
import "../typedtext/Typedtext.css";
import { ReactTyped } from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";

const Typedtext = () => {
  return (
    <>
      <div className="typedtext_anim container-fluid">
        <h1 className="tx row-fluid text-center text-sm-12 text-md-6 fw-bold">
          Les compétences
        </h1>
        <ReactTyped
          className="typed_text text-center"
          strings={[
            "Dév. d'app. web pour l'ordi. de bureau et mobiles",
            "Front-end, Back-end",
            "HTML, CSS, javascript, PHP",
            "React, Angular, React Native",
            "Le framework symfony",
            "Autonomie dans le travail personnel",
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
