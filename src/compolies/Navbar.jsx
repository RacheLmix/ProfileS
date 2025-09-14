import { useState } from "react";
import MusicAee from "../components/MusicAee";

const Navbar = () => {
  const [isOpen, setItOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg drop-shadow-2xl">
        <div className="mx-auto c-space max-w-7xl">
          <div className="flex items-center justify-between py-2 sm:py-0">
            {/* Avatar */}
            <div className="flex items-center p-2">
              <img
                src="https://i.pinimg.com/736x/8c/88/1c/8c881c5a3490c66cf580103297d549a3.jpg"
                className="rounded-full w-12 h-12 border-2 border-transparent hover:border-amber-200 transition-all duration-700 ease-in-out hover:shadow-[0_0_15px_rgba(251,191,36,0.7)] hover:scale-[1.1]"
              />
            </div>

            {/* Menu */}
            <nav className="flex space-x-10 text-white font-semibold">
              <a href="/" className="hover:text-amber-200 transition-colors">Home</a>
              <a href="/" className="hover:text-amber-200 transition-colors">About</a>
              <a href="/" className="hover:text-amber-200 transition-colors">Services</a>
              <a href="/" className="hover:text-amber-200 transition-colors">Blog</a>
              <a href="/" className="hover:text-amber-200 transition-colors">Contact</a>
            </nav>

            <div className="w-12">
              <button
                onClick={() => setItOpen(!isOpen)}
                className="border-2 border-rose-100 p-2 text-white w-[150px] rounded-4xl hover:bg-rose-50 hover:text-black duration-300 ease-in-out hover:scale-[1.1] hover:shadow-[0_0_15px_rgba(251,191,36,0.7)]"
              >
                MUSIC
              </button>
            </div>
          </div>
        </div>
      </div>

      <MusicAee isOpen={isOpen} />
    </>
  );
};

export default Navbar;
