import React from "react";
import "../profileimg/Profileimg.css";
import Profileimage from "../../images/Profilepicture.png";
import Typedtext from "../typedtext/Typedtext";
function Profileimg() {
  return (
    <div className="prof container-fluid">
      <div className="row">
        <div className="imgdiv col-sm-5 col-md-5 col-lg-4 float-end">
          <img src={Profileimage} alt="Profile image" id="profileimage" />
        </div>
        {/* ============================== */}
        <div className="namediv col-sm-7 col-md-7 col-lg-8">
          <Typedtext />
          <h1 className="text-center">M Christy Justin LAMBERT</h1>
          <p className="text-center fw-bold">Développeur full stack</p>
          <div className="row btndiv">
            <div className="col-3 btn ">
              <a
                href="https://drive.google.com/file/d/1vMBCWc4Xoc-8CxumziLYC88Lg9MI4w2G/view?usp=drive_link"
                target="_blank"
              >
                <button className="topcontent_downloadbutton btn-lg text-nowrap col-xxl-3">
                  Télécharger CV
                </button>
              </a>
            </div>
            <div className="col-3 btn">
              <button className="topcontent_workbutton col-sm-4">
                {" "}
                Projets
              </button>
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
