import React from "react";
import styled from "styled-components";

const LeftArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: 32px;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
export default function LeftArrow({ prevSlide }) {
  return (
    <LeftArrowButton onClick={prevSlide}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.565"
        height="24"
        viewBox="0 0 14.565 24"
      >
        <path
          id="btn-Prev"
          d="M27.879,48.73,38.56,38.049a1.319,1.319,0,0,1,1.865,0l1.246,1.246a1.319,1.319,0,0,1,0,1.863l-8.465,8.5,8.465,8.5a1.319,1.319,0,0,1,0,1.863l-1.246,1.246a1.319,1.319,0,0,1-1.865,0L27.879,50.595A1.319,1.319,0,0,1,27.879,48.73Z"
          transform="translate(-27.493 -37.663)"
          fill="#fff"
        />
      </svg>
    </LeftArrowButton>
  );
}
