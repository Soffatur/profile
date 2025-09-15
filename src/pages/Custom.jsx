import { useRef, useState } from "react"

import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Custom() {

    const [isPlaying, setPlaying] = useState(false)
    const audioRef = useRef(null)

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setPlaying(!isPlaying)
    }
    return (
        <>

            {/*  navbar di atas */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#20BDFF] text-white">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="text-xl font-reguler w-full text-center font-bold">💕⃝🕊️ Love Story 💕⃝🕊️</div>
                </div>
            </nav>

            {/* konten */}
            <section className="h-full bg-fixed mt-13 bg-gradient-to-b from-[#6dd5ed] to-[#7F00FF]">
                <div className="pt-8">
                    <img src="/soffatur.jpg" alt="Profile" className="w-70 h-70 rounded-full border-4 border-white shadow-lg object-cover mx-auto" />
                    <h1 className="text-3xl mt-8 ms-5 me-5 font-bold text-white text-center">Muhammad Soffatur Rohman</h1>
                    <p className="text-xl text-white text-center font-bold ms-6 me-6 mt-6">"Jadilah dirimu sendiri tanpa mengikuti jalan orang lain, karena yang bisa menentukan jalanmu adalah kamu sendiri"</p>
                </div>
                <div className="mt-15 mb-20">
                    <img src="/heart4.gif" alt="Profile" className="w-76 h-auto object-contain mx-auto" />
                </div>
                <div className="pb-8">
                    <img src="/indi.jpg" alt="Profile" className="w-70 h-70 rounded-full border-4 border-white shadow-lg object-cover mx-auto" />
                    <h1 className="text-3xl mt-8 ms-5 me-5 font-bold text-white text-center">Indi Rakhmawati</h1>
                    <p className="text-xl text-white text-center font-bold ms-6 me-6 mt-6">"Kemarin adalah masa lalu.. hari ini adalah hal yang harus kamu jalani.. dan esok .. Adalah mimpi :')"</p>
                </div>
            </section>

            <button
                onClick={toggleAudio}
                className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
            >
                {isPlaying ? (
                    <FontAwesomeIcon icon={faPause} />
                ) : (
                    <FontAwesomeIcon icon={faPlay} />
                )}
            </button>
            {/* Audio */}
            <audio
                ref={audioRef}
                src="/indila_lovestory.mp3"
            />

        </>
    )
}