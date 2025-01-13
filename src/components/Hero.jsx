function Hero() {
  return (
    <div className="relative z-50 h-full bg-black/20 text-white">
      <div className="flex h-full items-center justify-center p-4">
        <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">Orbite The Earth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              consectetur mollitia sapiente dolores voluptatibus nulla corporis
              libero rerum, beatae, exercitationem suscipit nostrum ab sunt
              neque ipsum eaque tempore. Earum, natus!
            </p>
            <button className="rounded-md bg-blue-400 px-4 py-2 text-white duration-200 hover:bg-blue-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
