import React from "react";
import miniproj1 from "../public/img/miniproj1.png";
import miniproj2 from "../public/img/miniproj2.png";
import miniproj3 from "../public/img/miniproj3.png";
import miniproj4 from "../public/img/miniproj4.png";
import miniproj5 from "../public/img/miniproj5.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";

export default function MiniProjects() {
  return (
    <div className="mini-projects-box">
      <div className="single-box">
        <img src={miniproj1} className="project-img" alt="project image" />
        <div className="project-description">
          React application with Bootstrap styles and Firebase authentication
          <a
            href="https://github.com/PPrzebieda/firebase-authentication"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj2} className="project-img" alt="project image" />
        <div className="project-description">
          Vanilla JS app that fetches and displays the current time and weather
          <a href="https://github.com/PPrzebieda/dashboard" target="_blank">
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj3} className="project-img" alt="project image" />
        <div className="project-description">
          React application with login, registration and dashboard component.
          <a
            href="https://github.com/PPrzebieda/react-login-app"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj4} className="project-img" alt="project image" />
        <div className="project-description">
          Online store outline using HTML and CSS with no JavaScript. Contain
          dropdown menu, tables, forms and other HTML elements.
          <a
            href="https://github.com/PPrzebieda/html-css-online-shop"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj5} className="project-img" alt="project image" />
        <div className="project-description">
          A simple counter for learning Redux
          <a
            href="https://github.com/PPrzebieda/redux-counter/tree/main/count"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
