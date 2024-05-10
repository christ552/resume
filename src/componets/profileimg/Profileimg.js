import React from "react";
import "../profileimg/Profileimg.css";
import Profileimage from "../../images/Profilepicture.png";
import Typedtext from "../typedtext/Typedtext";
function Profileimg() {
  return (
    <div className="prof container-fluid">
      <div className="row">
        <div className="imgdiv col float-end align-self-end">
          <img
            src={Profileimage}
            alt="Profile image"
            id="profileimage"
            className=""
          />
        </div>
        {/* ============================== */}
        <div className="namediv col-sm-7">
          <div className="row">
            <Typedtext />
          </div>
          {/* ============== */}
          <div className="row justify-content-center">
            <h1 className="text-center ">M Christy Justin LAMBERT</h1>
          </div>
          {/* ===================== */}
          <div className="row">
            <p className="text-center fw-bold">Développeur full stack</p>
          </div>
          {/* ================== */}
          <div className="row btndiv">
            <div className="col btn">
              <a
                href="https://drive.google.com/file/d/1vMBCWc4Xoc-8CxumziLYC88Lg9MI4w2G/view?usp=drive_link"
                target="_blank"
              >
                <button className="topcontent_downloadbutton btn-lg text-nowrap col-auto">
                  Télécharger CV
                </button>
              </a>
            </div>
            {/* ====================== */}
            <div className="col btn">
              <button className="topcontent_workbutton col"> Projets</button>
            </div>
          </div>
        </div>
      </div>
      {/* =============================== */}
      {/* <div className="description container">
        <div className="typedtext"><Typedtext /></div>
        <div className="namediv"></div>
      </div> */}
    </div>
  );
}

export default Profileimg;
