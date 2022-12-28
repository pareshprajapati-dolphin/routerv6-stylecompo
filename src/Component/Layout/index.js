import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

// const MainDiv = styled.div`
//   /* height: 1000px; */
//   position: relative;
//   height: 100vh;
// `;

export default function Layout({ children }) {
  return (
    // <MainDiv>
    //   <Header />
    //   {children}
    //   <Footer />
    // </MainDiv>
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
