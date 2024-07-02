
import { Slide } from 'react-awesome-reveal';
import { FaCode, FaDatabase, FaTools,FaCogs } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { TbCodeDots } from 'react-icons/tb';
import { SiCodeforces,SiCodechef,SiLeetcode } from "react-icons/si";
import { GoCodeReview } from "react-icons/go";
const Skills = () => {
    return (
        <div className="section skills-section mx-4 md:mx-10 lg:mx-14 mb-20" id="skills">
            <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px]  font-bold mb-10"> Skills  </h2>
            <h1 className="text-center">I solved almost 800+ problem in various judge such links</h1>
            <div className="flex justify-center items-center mt-2 space-x-6 mb-20">
                <a href="https://codeforces.com/profile/nafis2000" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600">
                <SiCodeforces />
                </a>
                <a href="https://www.codechef.com/users/nafis2000" target="_blank" rel="noopener noreferrer" className="text-3xl text-red-600">
                <SiCodechef />
                </a>
                <a href="https://atcoder.jp/users/nafis2000?contestType=algo" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800">
                <GoCodeReview />
                </a>
                <a href="https://lightoj.com/user/nafis2001" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-800">
                  Lightoj
                </a>
                <a href="https://leetcode.com/u/nafis2000/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-800">
                <SiLeetcode />

                </a>
                
               
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <Slide>
                    <div className="skill-category md:h-64 bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <TbCodeDots className="text-4xl mb-4 text-blue-600" />
                        <h4 className="text-xl font-bold mb-2">Languages</h4>
                        <ul className="list-disc list-inside">
                            <li>C</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                </Slide>

                <Slide>
                    <div className="skill-category bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FaCode className="text-4xl mb-4 text-blue-600" />
                        <h4 className="text-xl font-bold mb-2">Frontend</h4>
                        <ul className="list-disc list-inside">
                            <li>React</li>
                            <li>Tailwind CSS</li>
                            <li>Daisy UI</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </Slide>

                <Slide>
                    <div className="skill-category md:h-64 bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FaCogs className="text-4xl mb-4 text-blue-600" />
                        <h4 className="text-xl font-bold mb-2">Backend</h4>
                        <ul className="list-disc list-inside">
                            <li>Node.js</li>
                        </ul>
                    </div>

                </Slide>

                <Slide>

                    <div className="skill-category md:h-64 bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FaDatabase className="text-4xl mb-4 text-blue-600" />
                        <h4 className="text-xl font-bold mb-2">Database</h4>
                        <ul className="list-disc list-inside">
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </Slide>

                <Slide>
                    <div className="skill-category md:h-64 bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <FaTools className="text-4xl mb-4 text-blue-600" />
                        <h4 className="text-xl font-bold mb-2">Tools</h4>
                        <ul className="list-disc list-inside">
                            <li>VS Code</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>DevTools</li>
                            <li>MS Office</li>
                        </ul>
                    </div>
                </Slide>

                <Slide>
                    <div className="skill-category md:h-64 bg-base-100 hover:bg-cyan-200 hover:text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <GiSkills className="text-4xl mb-4 text-blue-600" />
                        <h4 className="text-xl font-bold mb-2">Soft Skills</h4>
                        <ul className="list-disc list-inside">
                            <li>Problem Solving</li>
                            <li>Conversational English (comfortable)</li>
                        </ul>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Skills;