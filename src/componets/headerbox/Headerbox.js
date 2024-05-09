import React from "react";
import "../headerbox/Headerbox.css";
// import { ReactTyped } from "react-typed";
import Profileimg from "../profileimg/Profileimg";
// import Typedtext from "../typedtext/Typedtext";

const Headerbox = () => {
  return (
    <>
      <div className="row headerbox_wraper container-fluid">
        <div className="col divfour container-fluid">
          <Profileimg />
        </div>
      </div>
    </>
  );
};
export default Headerbox;
