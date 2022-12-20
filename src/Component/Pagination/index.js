import React, { useEffect, useMemo, useState } from "react";

export default function Pagination({ total, onPageChange, page, pageSize }) {
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (total > 0 && pageSize > 0) setTotalPage(Math.ceil(total / pageSize));
  }, [total, pageSize]);

  const pageNumber = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <button key={i} onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
    }
    return pages;
  }, [onPageChange, totalPage]);

  return (
    <div>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Pre
      </button>
      {pageNumber}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPage}
      >
        next
      </button>
    </div>
  );
}
