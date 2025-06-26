import React, { useState } from 'react';

interface PaginatorProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <nav className="paginator">
      <button
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="paginator__button"
      >
        ← Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handleChange(page)}
            className={`paginator__button ${
              page === currentPage ? 'paginator__button--active' : ''
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handleChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="paginator__button"
      >
        Next →
      </button>
    </nav>
  );
};

export default Paginator;
