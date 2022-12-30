import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppWrapper = styled.div`
  background-color: ${({ bg }) => bg || "#fff"};
  margin-left: ${({ sideberopen }) => sideberopen && "200px"};
  /* > div {
    display: flex;
    justify-content: center;
  } */
  @media (max-width: 768px) {
    margin-left: ${({ sideberopen }) => sideberopen && "0px"};
  }
`;

export default function Layout({ children }) {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <Sidebar sidebarIsOpen={sidebarIsOpen} />
      <AppWrapper sideberopen={sidebarIsOpen}>
        <Header toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
      </AppWrapper>
    </>
  );
}
