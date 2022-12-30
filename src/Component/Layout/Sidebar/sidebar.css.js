import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SidebarMenu = styled.div`
  /* width: 200px; */
  width: ${({ sidebaropen }) => (sidebaropen ? "200px" : "0px ")};
  height: 100vh;
  background-color: #5f808d;
  position: fixed;
  top: 0;
  left: ${({ sidebaropen }) => !sidebaropen && 0};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: ${({ sidebaropen }) => (!sidebaropen ? "200px" : "0px ")};
  }
`;

export const MenuItems = styled.ul`
  list-style: none;
  /* display: columns; */
  margin: 4px 0px;
  padding: 2px 0px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: #003333;
  text-decoration: none;
  margin: 0px 20px;
`;

export const DropdownLink = styled(Link)`
  color: #003333;
  text-decoration: none;
  margin: 0px 20px;
`;

export const SubMenuItems = styled.ul`
  list-style: none;
  display: columns;
  cursor: pointer;
  transition: all 0.5s ease-out;
  /* margin: -5px;
  margin: 10px 0px; */
`;

export const SubMenuItemLinks = styled.li`
  display: column;
  font-size: 20px;
  padding: 10px 0px;
  color: aliceblue;
  word-wrap: break-word;
  &:hover {
    width: 100%;
    background-color: #ffffff;
    color: #000;
    border-radius: 5px;
  }
`;

export const Arrowitem = styled.span`
  display: contents;
  align-items: center;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  min-height: 15px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background-color: #ffffff;
    color: #000;
    border-radius: 5px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgb(173 163 223);
      border-radius: 10px;
    `}
`;

export const SidebarLabel = styled.span`
  margin-left: 10px;
`;

export const SubSidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  min-height: 10px;
  text-decoration: none;
  font-size: 18px;
  margin-top: 2px;
  &:hover {
    background-color: #ffffff;
    color: #000;
    border-radius: 5px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgb(173 163 223);
      border-radius: 10px;
    `}
`;

export const SubSidebarLabel = styled.span`
  margin-left: 16px;
`;
