import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import routes from "../Routes";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  padding: 10px;
  background: papayawhip;
  > ul {
    display: flex;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;
  & :hover {
    color: red;
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
            <StyledLi active={router.path === location.pathname}>
              <Link to={router.path} key={idx}>
                {router.navbar}
              </Link>
            </StyledLi>
          ))}
        </ul>
      </Wrapper>
      <Outlet />
    </>
  );
}
