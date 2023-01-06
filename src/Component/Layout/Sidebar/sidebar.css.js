import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const UserDetails = styled.div`
  display: block;
`;
export const Picture = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0px 10px;
  width: 50%;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 70%;
`;

export const SidebarMenu = styled.div`
  /* width: 200px; */
  width: ${({ sidebaropen }) => (sidebaropen ? "200px" : "0px ")};
  height: 100vh;
  background-color: #4f5d73;
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
    color: #ffffff;
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
    background-color: whitesmoke;
    color: #000000;
    border-radius: 5px;
  }

  ${({ active }) =>
    active &&
    css`
      color: #000000;
      background-color: #e1e8f3;
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
    background-color: #9da5b1;
    color: #fff;
    border-radius: 5px;
  }

  ${({ active }) =>
    active &&
    css`
      color: #000000;
      background-color: #e1e8f3;
    `}
`;

export const SubSidebarLabel = styled.span`
  margin-left: 16px;
`;
