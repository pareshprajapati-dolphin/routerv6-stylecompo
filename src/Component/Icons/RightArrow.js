import React from "react";
import styled from "styled-components";

// const RightArrowButton = styled.button`
//   position: absolute;
//   top: 50%;
//   right: 32px;
//   color: #000;
//   z-index: 10;
//   cursor: pointer;
//   user-select: none;
// `;

export default function RightArrow({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
}
