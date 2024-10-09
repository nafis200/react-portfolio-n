
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="section projects-section mx-4 md:mx-10 lg:mx-14 mb-20" id="">
            <Fade>
                <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px]  font-bold mb-10"> Projects </h2>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Mangomart (Full Stack)[Team project](Manager) </h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://mangomart-5f69b.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">MangoMart</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/nafis200/Mangomart-typescript/tree/main?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Server-side:</strong> <a href="https://github.com/nafis200/Mangomart-backend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Implement a secure user authentication system using JWT tokens</li>
                            <li>Integrate two types of payment systems: Stripe and SSLCommerz.</li>
                            <li>The user order mango see mango details .</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript,Typescript,Axios, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB, JWT</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://mangomart-5f69b.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/nafis200/Mangomart-typescript/tree/main?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Blood Bank [Full Stack] (team project)[Member]  </h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://bloodbridge-bloodbank.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Blood Bank</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/Rakesh01999/BloodBridge-Frontend?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Server-side:</strong> <a href="https://github.com/Rakesh01999/BloodBridge-Backend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Create, view, update, and delete donor and patient profiles.</li>
                            <li>Manage blood group stocks and approve or reject blood donation and request submissions</li>
                            <li>Dashboard shows blood group stock levels, donor and patient counts, and the status of blood request </li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://bloodbridge-bloodbank.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/Rakesh01999/BloodBridge-Frontend?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Online Survey [Full Stack]</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://assignment-12-80409.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Online Survey</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/nafis200/assignment12?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Server-side:</strong> <a href="https://github.com/nafis200/assignment12-backend" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Implement a secure user authentication system with JWT tokens</li>
                            <li>Integrate a secure payment gateway to pay the money. </li>
                            <li>The surveyor can create, delete, and update their surveys </li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://assignment-12-80409.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/nafis200/assignment12?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Projects;
