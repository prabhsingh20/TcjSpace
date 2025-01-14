import Logo from "/logo.png";

function Navbar() {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed right-0 top-0 z-50 w-full bg-black/10 py-4 backdrop-blur-sm sm:py-1"
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-2xl font-bold text-white">
              <img src={Logo} alt="" className="w-10" />
              <span>TCJ-SPACE</span>
            </div>
            <div className="hidden text-white sm:block">
              <ul className="flex items-center gap-6 py-4 text-xl">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Galaxy</a>
                </li>
                <li>
                  <a href="#">Satelite</a>
                </li>
              </ul>
            </div>
            <div>
              <button className="rounded-md border-2 border-white px-3 py-1 text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
