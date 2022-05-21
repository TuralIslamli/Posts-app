import React from "react";
import "./Pagination.css";

interface PaginationProps {
  pagesCount: number;
  activePage: number;
  setActivePage: (value: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  pagesCount,
  activePage,
  setActivePage,
}) => {
  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="row">
        {pageNumbers.map((pageNumber: number, index: number) => (
          <div
            key={index}
            onClick={() => setActivePage(pageNumber)}
            className={activePage === pageNumber ? "select" : "page_number"}
          >
            {pageNumber}
          </div>
        ))}
      </div>
    </>
  );
};
