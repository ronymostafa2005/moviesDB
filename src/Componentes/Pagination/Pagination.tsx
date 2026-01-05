
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // Show limited pages on mobile
  const getVisiblePages = () => {
    if (pages.length <= 7) return pages;
    const maxVisible = 5;
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(pages.length, start + maxVisible - 1);
    const adjustedStart = Math.max(1, end - maxVisible + 1);
    
    const visible: (number | string)[] = [];
    if (adjustedStart > 1) {
      visible.push(1);
      if (adjustedStart > 2) visible.push('...');
    }
    for (let i = adjustedStart; i <= end; i++) {
      visible.push(i);
    }
    if (end < pages.length) {
      if (end < pages.length - 1) visible.push('...');
      visible.push(pages.length);
    }
    return visible;
  };

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-6 mb-6 sm:mb-10 flex-wrap px-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 sm:px-3 py-1 bg-gray-700 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm"
      >
        Prev
      </button>

      {/* Pages */}
      {getVisiblePages().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-400 text-xs sm:text-sm">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`px-2 sm:px-3 py-1 rounded transition-colors text-xs sm:text-sm ${
              page === currentPage
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-red-600 hover:text-white"
            }`}
          >
            {page}
          </button>
        )
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-3 py-1 bg-gray-700 text-white rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm"
      >
        Next
      </button>
    </div>
  );
}
