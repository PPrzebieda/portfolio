import React, { useState } from "react";
import page2 from "../public/img/page2.png";
import cssIco from "../public/img/css.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";

export default function Project2() {
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
      <div className="right-container">
        <h1>Pizza Event</h1>
        <div className="description">
          "Pizza Event" is an application used to sign up for an event for pizza
          lovers. The user can create an account and log in to it.
          Authentication is performed by Firebase. Subsequently, the
          authenticated user has the option to sign up for the event through the
          submission form. User data is stored in local storage. A list of
          enrolled users is also available in the application. The application
          is written for mobile and desktop users.
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
              <img src={cssIco} className="tech-ico2" alt="css icon" />
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
            <a href="https://github.com/PPrzebieda/pizza-event" target="_blank">
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="https://pprzebieda.github.io/pizza-event/" target="_blank">
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
      <div className="left-container">
        <img src={page2} className="img-project2" />
      </div>
    </div>
  );
}
