import avatar from "../assets/img/avatar_b.png";
import logo from "../assets/img/lict_logo.png";

const Navbar = () => {
  return (
    <>
      <div className="topbanner text-white text-sm flex gap-4 bg-cyan-400 h-12 px-20">
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <span>mailto@lict.edu.np</span>
        </div>

        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          <span>Gaindakot-4, Kaligandaki Chowk</span>
        </div>

        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <span>078 502188, 078 503206</span>
        </div>
      </div>

      <nav className="actualnav flex items-center justify-between shadow-sm px-20 sticky top-0 bg-white py-2">
        <div>
          <a href="/">
            <img
              src={logo}
              alt="lict logo"
              className="w-16 h-16 rounded-full object-fill p-2 hover:border hover:border-[#e1ab19] transition duration-300"
            />
          </a>
        </div>

        <div className="flex justify-evenly items-center gap-4">
          <div className="text-2xl font-bold text-orange-400  hover:text-orange-600 hover:transform hover:scale-105 transition duration-300 cursor-pointer">
            LICT API
          </div>
          <a
            href="#"
            className="hover:text-orange-400 hover:underline transition duration-100"
          >
            <div>INFO?</div>
          </a>
          <a
            href="#"
            className="hover:text-orange-400 hover:underline transition duration-100"
          >
            <div>SOURCE</div>
          </a>
          <a href="/profile">
            <img
              src={avatar}
              alt="user image"
              className="w-16 h-16 rounded-full  object-cover p-2 hover:border hover:border-[#e1ab19] transition duration-300"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
