import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
// import Email from "./Email";
import Empty from "./Empty";
import Empty1 from "./Empty1";
import Empty2 from "./Empty2";
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
            <Element name="">
                 <Contact></Contact>
            </Element>
            <Element name="Skills">
               <Empty1></Empty1>
            </Element>
            <Element name="">
                <Skills></Skills>
            </Element>
            <Element name="Projects">
                <Empty2></Empty2>
            </Element>
            <Element name="">
                <Projects></Projects>
            </Element>
            <Element name="Education">
               <Education></Education>
            </Element>
            {/* <Element name="email">
            <Email></Email>
            </Element> */}
        </div>
    );
};

export default Home;