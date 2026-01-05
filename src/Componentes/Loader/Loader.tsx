export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/30 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-500/20 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-500/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-yellow-500/20 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Outer Rotating Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-4 border-red-500/10 rounded-full"></div>
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-4 border-transparent border-t-red-500 border-r-red-500 rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
        </div>

        {/* Middle Rotating Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 border-4 border-transparent border-b-yellow-400 border-l-yellow-400 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Movie Icon with Glow Effect */}
        <div className="relative flex items-center justify-center">
          <div className="text-5xl sm:text-6xl md:text-7xl animate-pulse drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]">
            🎬
          </div>
        </div>

        {/* Loading Text with Gradient */}
        <div className="absolute -bottom-16 sm:-bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent animate-pulse">
            Loading Movies...
          </p>
          <div className="flex gap-2 mt-3 justify-center">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-bounce shadow-lg shadow-red-500/50" style={{ animationDelay: '0s' }}></div>
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-bounce shadow-lg shadow-yellow-400/50" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-bounce shadow-lg shadow-red-500/50" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

