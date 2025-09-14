import React, { useState, useEffect } from "react";
import Navbar from "./compolies/Navbar";
import Main from "./compolies/Main";
import Loader from "./components/Loader";
import Project from "./compolies/Project";
import Background from './components/Background';
import SliderLogo from "./compolies/SliderLogo";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Hoặc lấy từ Loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto max-w-10xl">
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="min-h-screen">
            <Navbar />
            <Main />
          </section>
          <section className="min-h-screen">
            <Project />
          </section>
          {/* <section className="min-h-screen">
            <SliderLogo />
          </section> */}
        </>
      )}
    </div>
  );
}

export default App;
