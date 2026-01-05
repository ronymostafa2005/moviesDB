import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFire, faEnvelope , faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur fixed top-0 w-full z-50 text-white shadow-md py-4 sm:py-6 md:py-12 px-4 sm:px-6 md:px-16">
      <div className="flex items-center justify-between w-full">
        {/* Title */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0d6efd] font-bold transition-all duration-500 transform origin-left hover:scale-125 hover:drop-shadow-[0_0_15px_#0d6efd]">
          🎬 MoviesDB
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-2 lg:space-x-4">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-1 lg:gap-2 text-sm lg:text-xl xl:text-2xl cursor-pointer p-1 lg:p-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'text-[#0d6efd] hover:translate-y-[-2px] hover:text-[#0d6efd]'
                }`
              }
            >
              <FontAwesomeIcon icon={faHouse} className="transition-all duration-300 text-xs lg:text-base" />
              <span className="hidden lg:inline">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/trending"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-1 lg:gap-2 text-sm lg:text-xl xl:text-2xl cursor-pointer p-1 lg:p-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'text-[#0d6efd] hover:translate-y-[-2px] hover:text-[#0d6efd]'
                }`
              }
            >
              <FontAwesomeIcon icon={faFire} className="transition-all duration-300 text-xs lg:text-base" />
              <span className="hidden lg:inline">Trending</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center gap-1 lg:gap-2 text-sm lg:text-xl xl:text-2xl cursor-pointer p-1 lg:p-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'text-[#0d6efd] hover:translate-y-[-2px] hover:text-[#0d6efd]'
                }`
              }
            >
              <FontAwesomeIcon icon={faEnvelope} className="transition-all duration-300 text-xs lg:text-base" />
              <span className="hidden lg:inline">Contact</span>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* الخط + النجمة + النص - Desktop Only */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-1 h-8 self-start bg-gray-700"></div>
          <FontAwesomeIcon icon={faStar} className="text-[#ffd43b]" />
          <h5 className="text-base lg:text-lg text-gray-400">
            Discover Movies & TV Shows
          </h5>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
          <ul className="flex flex-col space-y-2 pt-4">
            <li>
              <NavLink
                to="/home"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center gap-2 text-lg cursor-pointer p-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-[#0d6efd] hover:bg-red-600 hover:text-white'
                  }`
                }
              >
                <FontAwesomeIcon icon={faHouse} className="transition-all duration-300" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trending"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center gap-2 text-lg cursor-pointer p-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-[#0d6efd] hover:bg-red-600 hover:text-white'
                  }`
                }
              >
                <FontAwesomeIcon icon={faFire} className="transition-all duration-300" />
                Trending
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `flex items-center gap-2 text-lg cursor-pointer p-2 rounded-md transition-all duration-300 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-[#0d6efd] hover:bg-red-600 hover:text-white'
                  }`
                }
              >
                <FontAwesomeIcon icon={faEnvelope} className="transition-all duration-300" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
