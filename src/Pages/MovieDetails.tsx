import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Componentes/Loader/Loader";

interface MovieDetails {
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  runtime: number;
  original_language: string;
  popularity: number;
  tagline: string;
}

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!movie) return null;

  return (
    <div >
    <div
      className="min-h-screen bg-cover bg-center relative mt-16 sm:mt-20 md:mt-24"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12">
        
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-full sm:w-[250px] md:w-[300px] mx-auto md:mx-0 rounded-2xl shadow-2xl"
          alt={movie.title}
        />

        {/* Info */}
        <div className="text-white max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
            {movie.title}
          </h1>

          <p className="italic text-slate-300 mb-4 text-sm sm:text-base">
            "{movie.tagline}"
          </p>

          {/* Rating Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className="bg-yellow-400 text-black font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm">
              ⭐ {movie.vote_average.toFixed(1)} / 10
            </span>
            <span className="text-slate-300 text-xs sm:text-sm">
              {movie.vote_count} votes
            </span>
            <span className="bg-green-500 text-black text-xs font-semibold px-2 sm:px-3 py-1 rounded">
              Released
            </span>
            <span className="text-slate-300 text-xs sm:text-sm">
              {movie.runtime} min
            </span>
          </div>

          {/* Overview */}
          <h3 className="text-yellow-400 font-bold mb-2 text-sm sm:text-base">OVERVIEW</h3>
          <p className="text-slate-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            {movie.overview}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm mb-6 sm:mb-8">
            <div>
              <p className="text-yellow-400 font-semibold">Release Date</p>
              <p>{movie.release_date}</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold">Runtime</p>
              <p>{movie.runtime} min</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold">Original Language</p>
              <p>{movie.original_language.toUpperCase()}</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold">Popularity</p>
              <p>{movie.popularity.toFixed(1)}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base">
              ▶ Watch Now
            </button>
            <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base">
              View on IMDb
            </button>
          </div>
        </div>
      </div>
 
    </div>
<div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 md:mt-10 max-w-5xl mx-auto mb-10 sm:mb-16 md:mb-20 px-4 sm:px-6">
  
  {/* Title */}
  <h2 className="text-blue-600 text-lg sm:text-xl font-medium mb-4 sm:mb-6">
    Additional Information
  </h2>

  {/* Content */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-y-6 md:gap-y-8 gap-x-6 sm:gap-x-8 md:gap-x-12">
    
    {/* Budget */}
    <div>
      <p className="text-gray-500 text-sm mb-1">Budget</p>
      <p className="text-gray-900 text-base font-medium">
        Not Available
      </p>
    </div>

    {/* Revenue */}
    <div>
      <p className="text-gray-500 text-sm mb-1">Revenue</p>
      <p className="text-gray-900 text-base font-medium">
        Not Available
      </p>
    </div>

    {/* Status */}
    <div>
      <p className="text-gray-500 text-sm mb-2">Status</p>
      <span className="inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">
        Released
      </span>
    </div>

    {/* Original Title */}
    <div className="md:col-span-3">
      <p className="text-gray-500 text-sm mb-1">
        Original Title
      </p>
      <p className="text-gray-900 text-base font-medium">
        Der Tiger
      </p>
    </div>

  </div>
</div>

 </div >
 
      
  );
}
