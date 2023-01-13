import React from "react";
import styled from "styled-components";
// import myImage from "/../images/slide1.jpg";
const team = [
  {
    name: "test",
    project: "120",
    tasks: "200",
  },
  {
    name: "test1",
    project: "121",
    tasks: "201",
  },
  {
    name: "test2",
    project: "122",
    tasks: "202",
  },
  {
    name: "test3",
    project: "123",
    tasks: "203",
  },
  {
    name: "test4",
    project: "124",
    tasks: "204",
  },
  {
    name: "test5",
    project: "125",
    tasks: "205",
  },
  {
    name: "test6",
    project: "126",
    tasks: "206",
  },
  {
    name: "test",
    project: "120",
    tasks: "200",
  },
];

const StyledContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  grid-gap: 5px;
  box-sizing: border-box;
`;
const HeaderImage = styled.div`
  /* display: block;
  position: relative;
  margin-bottom: -140px;
  box-sizing: border-box; */

  min-height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url("../images/slide1.jpg");
`;

const PageCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  right: 0;
  margin: 20px;
  max-width: 100px;
  padding: 16px;
  background-color: white;
  /* margin: 40px 0;
  padding: 40px; */
`;

export default function Team() {
  return (
    <>
      {/* <StyledContainer> */}
      {/* <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            width: "100%",
            padding: "5px",
            marginBottom: "1.5rem",
            border: "3px solid gray",
          }}
        > */}
      <HeaderImage>
        <PageCard>
          <div>team</div>
          <div>team</div>
          <div>team</div>
          <div>team</div>
          <div>team</div>
          <div>team</div>
        </PageCard>
      </HeaderImage>
      {/* <PageCard
      // style={{
      //   flex: "1 1 auto",
      //   boxSizing: "border-box",
      // }}
      >
        test card
      </PageCard> */}
      {/* </div> */}
      {/* </StyledContainer> */}
    </>
  );
}
