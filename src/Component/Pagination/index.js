import React, { useEffect, useMemo, useState } from "react";
import Button from "../Ui/Atoms/button";

export default function Pagination({
  total,
  onPageChange,
  page,
  pageSize,
  currentpage,
}) {
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (total > 0 && pageSize > 0) setTotalPage(Math.ceil(total / pageSize));
  }, [total, pageSize]);

  const pageNumber = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <div style={{ margin: "0px 5px" }} key={i}>
          <Button
            label={i}
            onClick={() => onPageChange(i)}
            active={i === page}
            minWidth="50px"
            minHeight="50px"
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
        minWidth="50px"
        minHeight="50px"
        disabled={page === 1}
      />
      {/* <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Pre
      </button> */}
      {pageNumber}
      <Button
        label="Next"
        minWidth="50px"
        minHeight="50px"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPage}
      />
    </div>
  );
}
