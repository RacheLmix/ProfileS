import { linearGradient } from "framer-motion/m";
import { useEffect, useState, useRef } from "react";

const playlist = [
    { id: 1, title: "Bài 1", src: "/Music/roi.mp3", img: "/PngAstist/png1.jpg" },
    { id: 2, title: "Bài 2", src: "/Music/song2.mp3", img: "/PngAstist/png2.jpg" },
    { id: 3, title: "Bài 3", src: "/Music/song3.mp3", img: "/PngAstist/png3.jpg" }
];

const MusicAee = ({ isOpen }) => {
    const [show, setShow] = useState(false);
    const [slide, setSlide] = useState(false);
    const [currentId, setCurrentId] = useState(playlist[0].id);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
            setTimeout(() => setSlide(true), 10);
        } else {
            setSlide(false);
            const timeout = setTimeout(() => setShow(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    // Khi currentId thay đổi, phát lại audio
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play().catch(e => console.log("Không thể phát audio:", e));
        }
    }, [currentId]);

    const track = playlist.find(t => t.id === currentId);

    const nextTrack = (e) => {
        e.stopPropagation();
        setCurrentId(prevId => {
            const currentIndex = playlist.findIndex(t => t.id === prevId);
            const nextIndex = (currentIndex + 1) % playlist.length;
            return playlist[nextIndex].id;
        });
    };

    const prevTrack = (e) => {
        e.stopPropagation();
        setCurrentId(prevId => {
            const currentIndex = playlist.findIndex(t => t.id === prevId);
            const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
            return playlist[prevIndex].id;
        });
    };

    if (!show) return null;

    return (
        <div
            className={`w-[950px] h-[450px] absolute top-1/2 left-1/2 -translate-x-1/2
        flex flex-row transition-transform duration-300 ease-in-out
        ${slide ? "-translate-y-1/2" : "-translate-y-[200%]"}`
            }
            style={{
                zIndex: 1000,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${track.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-[318px] relative">
                {/* Ảnh overlay */}
                <img
                    src="https://i.pinimg.com/736x/c2/78/62/c27862a2a635e7304e79fe41b33d1f29.jpg"
                    alt="overlay"
                    className="w-60 h-60 rounded-full absolute top-28 right-[-120px] z-0 opacity-70 animate-spin"
                    style={{ animationDuration: "8s" }}
                />

                {/* Ảnh chính */}
                <img
                    src={track.img}
                    alt={track.title}
                    className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
            </div>

            {/* Nút Next / Prev ngang hàng */}
            <div className="flex flex-row justify-center gap-4 z-20 mt-[190px] ml-[180px]">
                <button
                    onClick={prevTrack}
                    className="px-4 py-2 w-[150px] h-[50px] border-2 border-white text-white rounded-full
                     hover:bg-white hover:text-black duration-300 ease-in-out transition relative "
                    style={{ zIndex: 1001 }}
                >
                    Prev
                </button>
                <button
                    onClick={nextTrack}
                    className="px-4 py-2 w-[150px] h-[50px] border-2 border-white text-white rounded-full
                     hover:bg-white hover:text-black duration-300 ease-in-out transition relative "
                    style={{ zIndex: 1001 }}
                >
                    Next
                </button>
            </div>
            <audio
                key={track.id}
                ref={audioRef}
                src={track.src}
                autoPlay
                loop
            />
        </div>
    );
};

export default MusicAee;