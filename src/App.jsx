import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Satellite from "./components/Satellite";
import bgVideo from "/earth-bg.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <div className="relative h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 z-[-1] h-[700px] w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      <Cards />
      <Mission />
      <Satellite />
      <Footer />
    </>
  );
}

export default App;
