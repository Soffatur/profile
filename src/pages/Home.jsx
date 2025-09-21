import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-200 text-gray-500">
                <div className="grid grid-cols-8 gap-4 ps-5 pe-5 pt-10 mb-20">
                    <div className="col-span-8 md:col-span-4 md:col-start-3 mt-10 mb-10">
                        <h1 className="text-4xl font-bold text-center">Hello, I'm Muhammad Soffatur Rohman a IT Consultant & Software Developer</h1>
                    </div>
                    <div className="col-span-2 col-start-2 w-full items-center md:items-end flex flex-col">
                        <Link to={'/about'} className="md:w-[50%]">
                            <img src="/about.png" width={"100%"} />
                            <p className="text-center text-base font-bold">About</p>
                        </Link>
                    </div>
                    <div className="col-span-2 w-full items-center flex flex-col">
                        <Link to={'/resume'} className="md:w-[50%]">
                            <img src="/cv.png" width={"100%"} />
                            <p className="text-center text-base font-bold">Resume</p>
                        </Link>
                    </div>
                    <div className="col-span-2 w-full items-center md:items-start flex flex-col">
                        <Link to={'/portfolio'} className="md:w-[50%]">
                            <img src="/portfolio.png" width={"100%"} />
                            <p className="text-center text-base font-bold">Portfolio</p>
                        </Link>
                    </div>
                </div>
                <Footer color={'bg-gray-200'} />
            </div>
        </>
    );
}