import React from "react";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
import { useRef } from "react";
import "material-symbols";

const WorkExperience = () => {
  // ======for carousel effect========================
  const sliderRef = useRef();

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container container-fluide mt-1">
      <div className="row h4">
        <h4 className="fs-2 col mt-1">L'expérience professionnelle</h4>
      </div>
      <div className="experience-content row">
        {/* ====for arrow for the slider (carousel====) */}

        <div className="arrow-right col" onClick={slideRight}>
          <span className="material-symbols-outlined col">chevron_right</span>
        </div>
        {/* =========================== */}
        <div className="arrow-left col" onClick={slideLeft}>
          <span className="material-symbols-outlined col">chevron_left</span>
        </div>
        {/* ================================= */}
        <div className="slider col">
          <Slider ref={sliderRef} {...setting}>
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
