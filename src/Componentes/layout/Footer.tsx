import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 w-full border border-silver/40 rounded-[4px] ">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 ">
        {/* Main Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">

          {/* Left: Logo and Description */}
          <div className="sm:col-span-2 md:col-span-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
              🎬 MoviesDB
            </h1>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Your ultimate destination for discovering trending movies, TV series,
              and entertainment content from around the world.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="hover:text-red-500 transition text-sm sm:text-base">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition text-sm sm:text-base">Trending</a></li>
              <li><a href="#" className="hover:text-red-500 transition text-sm sm:text-base">Contact Us</a></li>
            </ul>
          </div>

          {/* Middle: Categories */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
              Categories
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#" className="hover:text-red-500 transition text-sm sm:text-base">All Trending</a></li>
              <li><a href="#" className="hover:text-red-500 transition text-sm sm:text-base">Movies</a></li>
              <li><a href="#" className="hover:text-red-500 transition text-sm sm:text-base">TV Series</a></li>
            </ul>
          </div>

          {/* Right: Connect */}
<div>
  <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
    Connect With Us
  </h2>
  <div className="flex gap-3 sm:gap-4">
    <a
      href="#"
      className="p-2 sm:p-3 bg-gray-800 hover:bg-red-600 transition rounded-full"
    >
      <FaFacebook size={16} className="sm:w-[18px] sm:h-[18px]" />
    </a>
    <a
      href="#"
      className="p-2 sm:p-3 bg-gray-800 hover:bg-red-600 transition rounded-full"
    >
      <FaTwitter size={16} className="sm:w-[18px] sm:h-[18px]" />
    </a>
    <a
      href="#"
      className="p-2 sm:p-3 bg-gray-800 hover:bg-red-600 transition rounded-full"
    >
      <FaInstagram size={16} className="sm:w-[18px] sm:h-[18px]" />
    </a>
  </div>
</div>


        </div>

        {/* Bottom Footer */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-5 md:pt-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm">
          <div className="text-gray-400">
            © {currentYear} MoviesDB. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
