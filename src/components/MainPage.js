import React, { useState } from "react";
import Navbar from "./Navbar";
import hiIco from "../public/img/hi.png";
import localizationIco from "../public/img/place.png";
import lndIco from "../public/img/linkedinIco.png";
import gitIco from "../public/img/githubIco.png";
import htmlIco from "../public/img/html.png";
import cssIco from "../public/img/css.png";
import jsIco from "../public/img/js.png";
import bootIco from "../public/img/bootstrap.png";
import reactIco from "../public/img/react.png";
import threeIco from "../public/img/three.png";
import avatar from "../public/img/avatar.png";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MainPage() {
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
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <span className="title">Front-End React Developer</span>
          <img src={hiIco} className="hello-ico" alt="hello icon" />
          <div className="description">
            Hi, I'm Przemysław Przebięda. A passionate Front-end React Developer
            based in Cracow, Poland.
            <a href="#contact">
              <img
                src={localizationIco}
                className="localization-ico"
                alt="localization icon"
              />
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/przemys%C5%82aw-przebi%C4%99da/"
            target="_blank"
          >
            <img src={lndIco} className="social-ico" alt="linkedin icon" />
          </a>
          <a href="https://github.com/PPrzebieda" target="_blank">
            <img src={gitIco} className="social-ico" alt="github icon" />
          </a>
          <div className="description">Tech Stack:</div>
          <div className="tech-stack-box">
            <div
              className="tech-stack-single-box"
              id="HTML"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={htmlIco} className="tech-ico1" alt="html icon" />
              <span>{html ? "HTML" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="CSS"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={cssIco} className="tech-ico1" alt="css icon" />
              <span>{css ? "CSS/SCSS" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="JavaScript"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={jsIco} className="tech-ico1" alt="js icon" />
              <span>{js ? "JavaScript" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Bootstrap"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={bootIco} className="tech-ico2" alt="bootstrap icon" />
              <span>{boot ? "Bootstrap" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico2" alt="react icon" />
              <span>{react ? "React.js" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Three.js"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={threeIco} className="tech-ico3" alt="three.js icon" />
              <span>{three ? "Three.js" : ""}</span>
            </div>
          </div>
        </div>
        <div className="right-container">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="red"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={avatar} className="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
