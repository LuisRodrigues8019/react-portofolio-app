import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Certifications from "./components/certifications/Certifications";
import About from "./components/about/About"
import Contact from "./components/contacts/Contacts";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {

  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <Intro/>
    <About/>
    <Skills/>
    <Works/>
    <Certifications/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
