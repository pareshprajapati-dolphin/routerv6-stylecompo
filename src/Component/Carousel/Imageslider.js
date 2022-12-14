import React, { useState } from "react";
import { SliderData } from "./SliderData";
import styled from "styled-components";
import LeftArrow from "../Icons/LeftArrow";
import RightArrow from "../Icons/RightArrow";

const StyledContainer = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const StyledImage = styled.img`
  min-width: 100%;
`;

const RightArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 32px;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
const LeftArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: 32px;
  color: #000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
const StyledDiv = styled.div`
  display: flex;
  height: inherit;
  width: inherit;
  transform: translate3d(${({ currentSlide }) => currentSlide}%, 0px, 0px);
  transition-duration: 350ms;
  @media (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
`;
const Sliderh1 = styled.h1`
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
`;

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // useEffect(() => {
  /// auto slide the images
  //   setTimeout(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   }, 3000);
  // }, [current, length]);

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <>
      <StyledContainer>
        <LeftArrowButton onClick={prevSlide}>
          <LeftArrow />
        </LeftArrowButton>
        <RightArrowButton className="right-arrow" onClick={nextSlide}>
          <RightArrow />
        </RightArrowButton>
        {SliderData.map((slide, index) => {
          return (
            <StyledDiv currentSlide={current * -100} key={index}>
              {index === current && (
                <>
                  <StyledImage src={`${slide.image}`} alt="travel image" />
                  <Sliderh1>{slide.description}</Sliderh1>
                </>
              )}
            </StyledDiv>
          );
        })}
      </StyledContainer>
    </>
  );
};

export default ImageSlider;
