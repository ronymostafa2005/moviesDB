import { useState, useEffect } from "react";
import Sidebar from "../Componentes/layout/Sidebar";
import Card from "../Componentes/CardsComopnents/Card";
import Pagination from "../Componentes/Pagination/Pagination";
import Loader from "../Componentes/Loader/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

export default function Trending() {
  const [category, setCategory] = useState("all");
  const [content, setContent] = useState<
    { id: number; name?: string; title?: string; poster_path: string; vote_average: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Page state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Items per page

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  // Fetch data by category
  const fetchContent = async (cat: string) => {
    setLoading(true);
    try {
      let endpoint = "";
      switch (cat) {
        case "all":
          endpoint = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US`;
          break;
        case "movie":
          endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`;
          break;
        case "tv":
          endpoint = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US`;
          break;
        default:
          endpoint = `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US`;
      }

      const res = await fetch(endpoint);
      const data = await res.json();
      setContent(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when category changes
    fetchContent(category);
  }, [category]);

  // Calculate current page content
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContent = content.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(content.length / itemsPerPage);

  return (
    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 px-4 sm:px-6 mt-20 sm:mt-24 md:mt-24">
      <Sidebar onCategoryChange={setCategory} />

      <main className="flex-1 mt-0 md:mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center">
          <FontAwesomeIcon icon={faFire} className="text-red-500 mr-2 text-lg sm:text-xl md:text-2xl" />
          <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl">All Trending Content This Week</span>
        </h1>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
          {category === "all" ? "All Content" : category === "movie" ? "Movies" : "TV Series"}
        </h1>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {currentContent.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.name || item.title || "Untitled"}
                  image={item.poster_path}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  rating={item.vote_average}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
        )}
      </main>
    </div>
  );
}
