import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import routes from "../../Routes";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  padding: 2px 0px;
  position: sticky;
  top: 0px;
  z-index: 1;
  background: ${({ theme }) => theme.colors.header};
  > ul {
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  }
  a {
    text-decoration: none;
    color: #003333;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    color: #000;
    border-radius: 30px;
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: rgb(173 163 223);
      border-radius: 30px;
    `}
`;

export default function Header() {
  const location = useLocation();

  return (
    <>
      <Wrapper>
        <ul>
          {routes.map((router, idx) => (
            <StyledLi active={router.path === location.pathname} key={idx}>
              <Link to={router.path}>{router.navbar}</Link>
            </StyledLi>
          ))}
          {/* <div style={{ position: "right" }}>
            <button>Logout</button>
          </div> */}
        </ul>
      </Wrapper>
      <Outlet />
    </>
  );
}
