import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {

  const [activeNav, setActiveNav] = useState("#")

  const navToState = (page: string) => {
    setActiveNav(page);
  }

  return (
    <>
      <Header />
      <Nav navToState={navToState} activeNav={activeNav} />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer navToState={navToState} />
    </>
  );
}

export default App;
