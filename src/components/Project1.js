import React, { useState } from "react";
import page1 from "../public/img/page1.png";
import cssIco from "../public/img/css.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";

export default function Project1() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page1} className="img-project1" />
      </div>
      <div className="right-container">
        <h1>Exclusive Car Rental</h1>
        <div className="description">
          "Exclusive Car Rental" is a website where the user can rent a luxury
          car. The user has the option to apply for a rental through an
          application form. In addition, it is possible to preview available
          cars with their technical data. The site contains information
          necessary for car rental, the possibility to subscribe to the
          newsletter and customer reviews. Website is written for mobile and
          desktop users.
          <div className="tech-box">
            <div
              className="single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico1" alt="html icon" />
              <span>{react ? "React" : ""}</span>
            </div>
            <div
              className="single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico2" alt="html icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </div>
          </div>
          <div className="links">
            <a
              href="https://github.com/PPrzebieda/exclusive-car-rental"
              target="blank"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://pprzebieda.github.io/exclusive-car-rental/"
              target="_blank"
            >
              <img
                src={liveIco}
                className="liveIco"
                target="blank"
                alt="live icon"
              />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
