import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppWrapper = styled.div`
  background-color: whitesmoke;
  margin-left: ${({ sideberopen }) => sideberopen && "200px"};
  min-height: 100vh;
  transition: all 0.5s ease-out;
  @media (max-width: 768px) {
    margin-left: ${({ sideberopen }) => sideberopen && "0px"};
  }
`;

export default function Layout({ children }) {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <AppWrapper sideberopen={sidebarIsOpen}>
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />

        <Footer />
      </AppWrapper>
    </>
  );
}
