import { useState } from 'react';

export default function usePagination(data = [], itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const next = () => {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const jump = (page) => {
    const pageNumber = Math.max(1, Math.min(page, maxPage));
    setCurrentPage(pageNumber);
  };

  return { currentPage, maxPage, currentData, next, prev, jump };
}
