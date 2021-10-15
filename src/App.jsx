import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contacts/Contacts";
import "./app.scss";

function App() {
  return (
    <div className="app">
    <Topbar/>
    <div className="sections">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Certifications/>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
