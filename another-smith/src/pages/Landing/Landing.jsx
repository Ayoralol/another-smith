import React from "react";
import portrait from "../../assets/portrait.png";

const Landing = () => {
  return (
    <div>
      <img src={portrait} alt="Reece Smith" />
      <div>
        <p>Hi, I'm Reece</p>
        <p>Junior Full-Stack Developer</p>
        <p>Writing code that is functional and makes sense (to me)</p>
      </div>
    </div>
  );
};

export default Landing;
