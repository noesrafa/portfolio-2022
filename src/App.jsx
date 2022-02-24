import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Contactme from "./components/contactme";
import Hero from "./components/Hero";
import ProjectPreview from "./components/ProjectPreview";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* === NAV === */}
        <section className="nav nomobile">
          <motion.div
            className="nav__links width-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "inertia",
              default: { duration: 1 },
              delay: 0.3,
            }}
          >
            <a
              className="nav-item"
              href="https://github.com/noesrafa"
              target="_blank"
            >
              <img src="/icons/console.svg" alt="console" />
            </a>
            <a
              className="nav-item"
              href="https://www.instagram.com/noesrafa/"
              target="_blank"
            >
              <img src="/icons/instagram.svg" alt="console" />
            </a>
            <a
              className="nav-item"
              href="https://www.linkedin.com/in/rafael-alexander-946702219/"
              target="_blank"
            >
              <img src="/icons/linkedin.svg" alt="console" />
            </a>
            <a
              className="nav-item"
              href="https://github.com/noesrafa"
              target="_blank"
            >
              <p className="text-sm">BLOG</p>
            </a>
            <a
              className="nav-item"
              href="https://github.com/noesrafa"
              target="_blank"
            >
              <p className="text-sm">ES</p>
            </a>
          </motion.div>
        </section>

        {/* HERO */}
        <Hero />

        <div className="divider">
          <img src="/icons/divider1.svg" alt="divider" />
        </div>

        {/* PROJECTS */}
        <div className="section-projects" id="projects">
          <ProjectPreview
            name={"SCROLLER"}
            description={"A social video App for meet people"}
            category={"Front-end"}
            icons={["react", "firebase", "storybook"]}
            imgs={["/example.png", "/example.png", "/example.png"]}
          />

          <ProjectPreview
            name={"NAVIGATER"}
            description={"Meet people while driving"}
            category={"Front-end"}
            icons={["postgress", "redux", "mongo"]}
            imgs={["/example.png", "/example.png", "/example.png"]}
          />
        </div>
      </div>

      {/* SOFTWARE */}
      <div className="softwares-container">
        <div className="divider">
          <img src="/icons/divider2.svg" alt="divider" />
        </div>

        <div className="softwares">
          <div className="bg-anchor">
            <div className="bg-gray"></div>
          </div>
          <div className="software__title">He trabajado con</div>
          <div className="softwares__icons">
            <div className="software__icon">
              <img src="/icons/react.svg" alt="react" />
              <p>react</p>
            </div>
            <div className="software__icon">
              <img src="/icons/native.svg" alt="react" />
              <p>native</p>
            </div>
            <div className="software__icon">
              <img src="/icons/redux.svg" alt="react" />
              <p>redux</p>
            </div>
            <div className="software__icon">
              <img src="/icons/node.svg" alt="react" />
              <p>node js</p>
            </div>
            <div className="software__icon">
              <img src="/icons/mongo.svg" alt="react" />
              <p>mongoDB</p>
            </div>
            <div className="software__icon">
              <img src="/icons/firebase.svg" alt="react" />
              <p>firebase</p>
            </div>
            <div className="software__icon">
              <img src="/icons/postgress.svg" alt="react" />
              <p>postgress</p>
            </div>
            <div className="software__icon">
              <img src="/icons/storybook.svg" alt="react" />
              <p>storybook</p>
            </div>
          </div>
        </div>

        <div className="divider">
          <img src="/icons/divider3.svg" alt="divider" />
        </div>
      </div>

      {/* CARDS */}
      <Cards />

        <div className="divider">
          <img src="/icons/divider4.svg" alt="divider" />
        </div>
      
      {/* CONTACT */}
      <Contactme/>

      <div className="footer" id="footer">
        <img src="/logo.svg" alt="logo" />
      </div>

    </div>
  );
}

export default App;
