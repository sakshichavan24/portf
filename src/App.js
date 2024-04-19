import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import SocialLink from "./component/SocialLink";
import About from "./component/About";
import Project from "./component/Project";
import Experience from "./component/Experience";
import Blank from "./component/blank";
import Contact from "./component/Contact";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Home />
      <About />
      <Project />
      <Experience />
      <Contact></Contact>
      <Blank />
      <SocialLink />
    </div>
  );
};

export default App;
