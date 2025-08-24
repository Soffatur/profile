import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Portfolio() {
    return (
        <>
            <div className="min-h-screen justify-center items-center flex flex-col">
            <Navbar />
                <img src="/loading.gif" alt="" width={200}/>
                <p className="text-xl text-reguler">Under Repair</p>
            <Footer />
            </div>
        </>
    );
}