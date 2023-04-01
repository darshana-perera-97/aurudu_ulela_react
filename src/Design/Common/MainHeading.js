import React from "react";
import wish_01 from "../images/wish_01.png";
import sun from "../images/sun.png";

export default function MainHeading() {
  return (
    <div className="main-heading">
      <img
        src={wish_01}
        className="main_wish"
        alt="Main wishing text is here"
          />
      <img
        src={sun}
        className="main_wish sun"
        alt="Main wishing text is here"
          />
          
    </div>
  );
}
