import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Activity from "./Activity/Activity";


export default function Container () {
    return (
        <div className="main-container">
            <Home />
            <About />
            <Skills />
            <Activity />
            <Contact />
        </div>
    )
}