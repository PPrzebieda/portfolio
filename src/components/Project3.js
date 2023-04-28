import React, { useState } from "react";
import page3 from "../public/img/page3.png";
import htmlIco from "../public/img/html.png";
import cssIco from "../public/img/css.png";
import jsIco from "../public/img/js.png";
import bootIco from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";
import threeIco from "../public/img/three.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";

export default function Project3() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

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
    } else if (e.target.id == "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page3} className="img-project3" />
      </div>
      <div className="right-container">
        <h1>Resume Builder</h1>
        <div className="description">
          /*Page is currently under construction. No demo available*/
          <br />
          <br />
          The project involves the creation of an application in which the user,
          after logging in, can create a resume by filling out a form. In
          addition, choosing its color scheme and page layout. The project
          includes previewing the PDF document and downloading it. Projects
          zakłada
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
            <div
              className="single-box"
              id="Firebase"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={firebaseIco}
                className="tech-ico1"
                alt="firebase icon"
              />
              <span>{firebase ? "Firebase" : ""}</span>
            </div>
          </div>
          <div className="links">
            <a href="#projects">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="#projects">
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
