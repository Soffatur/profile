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
                                Software Engineer - Backend Focused | Fullstack Laravel (4+ years)
                            </h3>
                            <p className="text-[16px]">
                                I am a backend engineer with 4+ years of experience building and maintaining production web applications. While my core expertise is in backend development, I have often contributed to full-stack projects using Laravel to deliver complete solutions and support cross-functional teams. <br /><br />Recently, I have been expanding my backend expertise into Golang, focusing on building scalable and efficient microservice architectures. I have hands-on experience with service-to-service communication using gRPC, API Gateway design, and domain-driven architecture, enabling reliable and high-performance backend systems. <br /><br />In addition, I have been working with deployment and infrastructure technologies such as Docker and Nginx to containerize services and manage server configurations. These experiences strengthen my ability to bridge the gap between software development and deployment practices. <br /><br /> I enjoy translating complex business requirements into structured backend solutions and am continuously growing my technical skills, including deployment and infrastructure practices. I aim to further strengthen my expertise in scalable backend systems, with a long-term interest in Infra and DevOps-related capabilities.
                            </p>
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