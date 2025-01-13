import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bgVideo from "/earth-bg.mp4";

function App() {
  return (
    <>
      <div className="relative h-[700px]">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 -z-10 h-[700px] w-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
