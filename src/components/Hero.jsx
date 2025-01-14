import moonSurface from "/moon-surface-hd.png";

function Hero() {
  return (
    <section className="relative z-10 h-full bg-black/20 text-white">
      <div className="flex h-full items-center justify-center p-4">
        <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">
              Orbite The Earth
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              consectetur mollitia sapiente dolores voluptatibus nulla corporis
              libero rerum, beatae, exercitationem suscipit nostrum ab sunt
              neque ipsum eaque tempore. Earum, natus!
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <img
        src={moonSurface}
        alt="moon surface"
        className="absolute bottom-0 right-0 z-10 w-full brightness-50"
      />
      <div className="absolute bottom-0 z-30 h-5 w-full bg-gradient-to-b from-transparent from-10% to-black to-90% sm:h-[50px] md:h-[60px]"></div>
    </section>
  );
}

export default Hero;
