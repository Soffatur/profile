import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faDownload, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto md:px-20 mb-15 mt-8 px-3 border-purple-500">
                <div className="grid grid-cols-12 gap-4">
                    <div className="md:col-span-5 col-span-12">
                        <div className="text-center">
                            <img className="rounded-full md:size-80 size-60 mx-auto" src="/soffatur.png" alt="image description" />
                        </div>
                    </div>
                    <div className="md:col-span-7 col-span-12">
                        <section className="about-text mb-4">
                            <h1 className="mb-2 text-3xl font-bold">Muhammad Soffatur Rohman</h1>
                            <h3 className="mb-4 text-xl flex">
                                Software Developer Turned DevOps & Product Management Enthusiast
                            </h3>
                            <p className="text-[16px]">I am a Software Developer with 4 years of experience in full-stack web development. Currently, I am deepening my expertise in Docker, Nginx, and DevOps practices to bridge the gap between software development and deployment efficiency. My focus is on solving technical challenges and transforming complex systems into reliable, scalable solutions. <br /> <br />
                            In addition, I am currently joining a Product Management bootcamp to expand my understanding of product strategy, user needs analysis, and cross-functional collaboration. My goal is to combine technical expertise with strategic product thinking to grow into a Technical Product Manager who can effectively connect the business and engineering sides of product development.</p>
                        </section>
                        <section className="mt-8 flex flex-wrap md:justify-between">
                            <button className="bg-[#E3E3E3] py-2.5 px-3.5 mb-2 text-sm rounded-lg w-full md:w-auto"><FontAwesomeIcon size="lg" icon={faPhone} /> 083116232970</button>
                            <button className="bg-[#E3E3E3] py-2.5 px-3.5 mb-2 text-sm rounded-lg w-full md:w-auto"><FontAwesomeIcon size="lg" icon={faEnvelope} /> soffatur26@gmail.com</button>
                            <button className="bg-[#E3E3E3] py-2.5 px-3.5 mb-2 text-sm rounded-lg w-full md:w-auto"><FontAwesomeIcon size="lg" icon={faLocationDot} /> Semarang, Indonesia</button>
                        </section>
                        <section className="mt-8 flex">
                            <a href="/CV_MuhammadSoffaturRohman.pdf" target="blank" className="bg-slate-800 hover:bg-slate-900 text-white py-4 px-5.5 mb-2 rounded-lg font-bold me-5"><FontAwesomeIcon size="lg" icon={faDownload} /> Download Resume</a>
                            <a href="http://wa.me/6283116232970" target="blank" className="bg-gray-200 hover:bg-gray-300 text-dark py-4 px-5.5 mb-2 rounded-lg font-bold"><FontAwesomeIcon size="lg" icon={faPaperPlane} /> Hire Me Now!</a>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}