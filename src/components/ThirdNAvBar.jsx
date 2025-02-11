import React from "react";
import "../style/ThidNavBar.css";
import { FaRegBell } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

const ThirdNAvBar = () => {
  return (
    <div className="thid_navbar">
      <div className="brand_name">
        <p>sureCHOICE</p>
      </div>
      <div className="icon_container">
        <div className="container support_container">
          <MdSupportAgent />
        </div>
        <div className="container notif_container">
          {" "}
          <FaRegBell />
       
        </div>
        <div className="container mail_container">
          {" "}
          <MdMailOutline />
        </div>
      </div>
    </div>
  );
};

export default ThirdNAvBar;
