import React from "react";
import styled from "styled-components";

const RightArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 32px;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export default function RightArrow({ nextSlide }) {
  return (
    <RightArrowButton onClick={nextSlide}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.565"
        height="24"
        viewBox="0 0 14.565 24"
      >
        <path
          id="btn-Next"
          d="M41.673,50.59,30.992,61.271a1.319,1.319,0,0,1-1.865,0l-1.246-1.246a1.319,1.319,0,0,1,0-1.863l8.465-8.5-8.465-8.5a1.319,1.319,0,0,1,0-1.863l1.246-1.246a1.319,1.319,0,0,1,1.865,0L41.673,48.725A1.319,1.319,0,0,1,41.673,50.59Z"
          transform="translate(-27.494 -37.657)"
          fill="#fff"
        />
      </svg>
    </RightArrowButton>
  );
}
