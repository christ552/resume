import React from "react";
import "../headerbox/Headerbox.css";
// import { ReactTyped } from "react-typed";
import Profileimg from "../profileimg/Profileimg";
// import Typedtext from "../typedtext/Typedtext";

const Headerbox = () => {
  return (
    <>
      <div className="headerbox_wraper">
        {/* <div className="divtree"></div> */}

        <div className="main_info">{/* <Typedtext /> */}</div>

        <div className="divfour">
          <Profileimg />
        </div>
      </div>
    </>
  );
};

export default Headerbox;
