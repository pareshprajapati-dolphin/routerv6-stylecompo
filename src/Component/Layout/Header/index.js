import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import routes from "../../Routes";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  padding: 2px 0px;
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
  }
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    color: #000;
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: rgb(173 163 223);
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
        </ul>
      </Wrapper>
      <Outlet />
    </>
  );
}
