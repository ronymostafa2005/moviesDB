import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Card from "../Componentes/CardsComopnents/Card";
import Pagination from "../Componentes/Pagination/Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
  }

  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch(() => toast.error("Error fetching trending movies ❌"));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = movies.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-20 sm:mt-24 md:mt-32 lg:mt-40">
      {/* Header */}
      <div className="flex items-center space-x-2 sm:space-x-4 mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          <FontAwesomeIcon icon={faHouse} className="transition-all duration-300 text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />Trending Today</h1>
      </div>
      <h5 className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 ml-0 sm:ml-8 md:ml-12 lg:ml-16">
        Discover the hottest movies trending right now
      </h5>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {currentMovies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            description={movie.overview}
            rating={movie.vote_average}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
