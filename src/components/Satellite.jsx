import satelitImg from "/satelite2.jpg";

function Satellite() {
  return (
    <>
      <section className="bg-primary py-20 text-white">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
            <div className="space-y-3 border-b-2 border-l-2 border-b-sky-800 border-l-sky-800 p-4 xl:pr-36">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="uppercase text-sky-800"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="text-5xl uppercase"
              >
                Rapidscat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eos molestiae reprehenderit
                expedita corporis, non doloremque. Consequatur consectetur
                quisquam qui sunt.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="primary-btn"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt="satellite image"
                className="mx-auto max-h-[350px] w-full object-cover sm:w-[80%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Satellite;
