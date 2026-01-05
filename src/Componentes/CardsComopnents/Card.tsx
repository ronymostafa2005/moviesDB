import { Link } from "react-router-dom";

export default function Card({
    id,
  title,
  image,
  description,
  rating,
}: {
    id: number;
  title: string;
  image: string;
  description: string;
  rating: number;
}) {
  return (
       <Link to={`/movie/${id}`}>
    <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-900/30 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
      
      {/* Rating Badge */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-2 py-1 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl shadow-lg flex items-center space-x-1 text-xs sm:text-sm">
  ⭐{rating.toFixed(1)}
</div>
     <div  className="relative overflow-hidden">
      {/* Movie Image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        className="w-full h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
</div>
      {/* Content */}
      <div className="p-3 sm:p-4 text-white">
        <h2 className="font-bold text-base sm:text-lg mb-2 truncate group-hover:text-red-500 transition-colors duration-300">{title}</h2>
        <span className="inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
            Movie
        </span>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
         </Link>
  );
}
