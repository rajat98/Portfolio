import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfessionalExperience from "./components/ProfessionalExperience/ProfessionalExperience";
import AcademicBackground from "./components/AcademicBackground/AcademicBackground";
import ScrollSpyTabs from "./components/ScrollSpyTabs/ScrollSpyTabs";
import Visualisations from "./components/Visualisation/Visualisations";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <ScrollSpyTabs
          tabsInScroll={[
            {
              text: "Home",
              component: <Home />
            },
            {
              text: "About",
              component: <About />
            },
            {
              text: "Education",
              component: <AcademicBackground />
            },
            {
              text: "Experience",
              component: <ProfessionalExperience />
            },
            {
              text: "Projects",
              component: <Projects />
            },
          {
              text: "Visualisation",
              component: <Visualisations/>
          }
          ]}
      />
      {/*<div className="App" id={load ? "no-scroll" : "scroll"}>*/}
        {/*<Navbar />*/}
        {/*<ScrollToTop />*/}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/ProfessionalExperience" element={<ProfessionalExperience />} />
          <Route path="/AcademicBackground" element={<AcademicBackground />} />
            <Route path="/Visualisations" element={<Visualisations />} />

          <Route path="/resume" element={<Resume />} />
          {/*<Route path="*" element={<Navigate to="/"/>} />*/}
        </Routes>
        <Footer />
      {/*</div>*/}
    </Router>
  );
}

export default App;
