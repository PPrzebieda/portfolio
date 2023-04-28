import React from "react";
import bee from "../public/img/bee.png";
import image from "../public/img/coding.png";

export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About me</h2>
          <div className="text">
            I am a beginner front-end developer and I am skilled in HTML, CSS
            and JavaScript web development, as well as the React framework. I am
            a graduate of Code:Me Academy JavaScript - React module. I am
            looking to gain valuable experience in an IT environment and expand
            my competence. I am ready for challenges and eager to learn and
            acquire new skills.
            <br />
            <br /> I graduated from the AGH University of Science and Technology
            in Cracow with a degree in Mechanical Engineering with a
            specialization in Computer Science in Mechanical Engineering.
            <br />
            <br />
            Privately, in addition to developing web applications, I am
            interested in beekeeping (I have my own apiary), kayaking and
            off-roading.
            <img src={bee} />
          </div>
        </div>
      </div>
    </div>
  );
}
