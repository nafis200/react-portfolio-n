import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Email from "./Email";
import Empty from "./Empty";
import Projects from "./Projects";
import Skills from "./Skills";
import { Element } from "react-scroll";


const Home = () => {
    return (
        <div>
            <Element name="">
            <Empty></Empty>
            </Element>
            <Element name="Aboutme">
             <Banner></Banner>
            </Element>
            <Element name="Contacts">
             <About></About>
            </Element>
            <Element name="Skills">
                 <Contact></Contact>
            </Element>
            <Element name="">
                <Skills></Skills>
            </Element>
            <Element name="Projects">
                <Projects></Projects>
            </Element>
            <Element name="Education">
               <Education></Education>
            </Element>
            <Element name="email">
            <Email></Email>
            </Element>
        </div>
    );
};

export default Home;