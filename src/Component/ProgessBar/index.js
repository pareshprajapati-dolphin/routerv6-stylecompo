import React from "react";
import styled, { keyframes } from "styled-components";

const ProgressBarWrapper = styled.div`
  background-color: #ee82ee50;
  width: 100%;
  height: 10px;
  position: relative;
  overflow: hidden;
`;
const fill = keyframes`
 0% {
    left: -100px;
    right:0;
  }
  100% {
    left: 100%;
    right: 100%;
   }
/* 100%{
    left: 0;
    right: 0;
} */
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  width: 100px;
  background: lightblue;
  height: 100%;
  animation: ${fill} 2.5s ease-in-out infinite;
`;

export default function ProgessBar() {
  return (
    <ProgressBarWrapper>
      <ProgressBar />
    </ProgressBarWrapper>
  );
}
