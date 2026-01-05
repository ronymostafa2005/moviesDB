
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onCategoryChange }: { onCategoryChange: (id: string) => void }) => {
  const links = [
    { id: "all", label: "All", icon:  <FontAwesomeIcon icon={faFire} className="transition-all duration-300 text-red-500" /> },
    { id: "movie", label: "Movies", icon: "🎬" },
    { id: "tv", label: "TV Series", icon: "📺" },
  ];

  return (
    <aside
      className="
        w-full md:w-64
        bg-slate-900
        min-h-0 md:min-h-screen
        rounded-2xl
        p-4 sm:p-6 md:p-8
        sticky top-20 md:top-24
        mb-4 md:mb-10
        mt-0 md:mt-20
        border-r-0 md:border-r border-slate-400/40
        border-b md:border-b-0 border-slate-400/40
      "
    >
      {/* عنوان السايدبار */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
        CATEGORIES
      </h2>

      {/* اللينكات */}
      <ul className="space-y-2 sm:space-y-3 md:space-y-5">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => onCategoryChange(link.id)}
              className="
                w-full
                flex
                items-center
                gap-2 sm:gap-3
                text-sm sm:text-base md:text-lg lg:text-xl
                text-gray-200
                font-semibold
                py-2 sm:py-2.5 md:py-3 px-3 sm:px-4
                rounded-lg
                hover:text-white
                hover:bg-red-600
                transition-all
                duration-300
              "
            >
              <span className="text-lg sm:text-xl md:text-2xl">{link.icon}</span>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Trending Now */}
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-8">
        <span>🔥</span>
        Trending Now
      </div>
    </aside>
  );
};

export default Sidebar;
