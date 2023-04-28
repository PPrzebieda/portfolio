import "./public/styles/main.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
