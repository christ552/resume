import React from "react";
import "../profileimg/Profileimg.css";
import Profileimage from "../../images/Profilepicture.png";
import Typedtext from "../typedtext/Typedtext";

function Profileimg() {
  return (
    <div className="prof">
      <div className="imgdiv">
        <img
          src={Profileimage}
          alt="Profile image"
          id="profileimage"
          className="img-fluid"
        />
      </div>

      <div className="description">
        <div className="content">
          <Typedtext />
          <div className="namediv">
            <h1>M Christy Justin LAMBERT</h1>
            <p>Développeur full stack</p>
          </div>
          <div className="btndiv">
            <a
              href="https://drive.google.com/file/d/1vMBCWc4Xoc-8CxumziLYC88Lg9MI4w2G/view?usp=drive_link"
              target="_blank"
            >
              <button className="topcontent_downloadbutton">
                Télécharger CV
              </button>
            </a>
            <button className="topcontent_workbutton"> Projets</button>
          </div>
        </div>
      </div>
      {/* <p>The only way to override an !important rule is to include another</p> */}
    </div>
  );
}

export default Profileimg;
