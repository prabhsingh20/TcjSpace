import bgVideo from "/earth-bg.mp4";

function App() {
  return (
    <>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover -z-10"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default App;
