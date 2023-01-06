import React, { useEffect, useMemo, useState } from "react";
import Button from "../Ui/Atoms/button";

export default function Pagination({ total, onPageChange, page, pageSize }) {
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (total > 0 && pageSize > 0) setTotalPage(Math.ceil(total / pageSize));
  }, [total, pageSize]);

  const pageNumber = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <div style={{ margin: "0px 5px" }}>
          <Button
            label={i}
            onClick={() => onPageChange(i)}
            //  padding="8px 15px"
          />
        </div>
        // <button key={i} onClick={() => onPageChange(i)}>
        //   {i}
        // </button>
      );
    }
    return pages;
  }, [onPageChange, totalPage]);

  return (
    <div style={{ display: "flex" }}>
      <Button
        label="Prev"
        onClick={() => onPageChange(page - 1)}
        padding="8px 15px"
        disabled={page === 1}
      />
      {/* <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Pre
      </button> */}
      {pageNumber}
      <Button
        label="Next"
        padding="8px 15px"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPage}
      />
    </div>
  );
}
