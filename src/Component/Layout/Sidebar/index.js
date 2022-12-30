import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useLocalStorage from "../../../hook/useLocalStorage";
import {
  MenuItems,
  SidebarMenu,
  SubMenuItems,
  SubSidebarLabel,
  SubSidebarLink,
  SidebarLink,
  SidebarLabel,
} from "./sidebar.css";

const SidebarData = [
  {
    path: "/",
    navbar: "Home",
  },
  {
    path: "/about",
    navbar: "About",
  },
  {
    path: "/service",
    navbar: "Service",
    child: [
      {
        path: "/service/newservice",
        navbar: "New Service",
      },
      {
        path: "/service/editservice",
        navbar: "Edit Service",
      },
    ],
  },

  {
    path: "/contact",
    navbar: "Contact",
    child: [
      {
        path: "addcontact",
        navbar: "Add Contact",
      },
      {
        path: "editcontct",
        navbar: "Edit Contact",
      },
    ],
  },
  {
    path: "/user",
    navbar: "User",
  },
  {
    path: "/details",
    navbar: "details",
  },
];

const UserDetails = styled.div`
  display: block;
`;
const Picture = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 0px 10px;
  width: 50%;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 70%;
`;

const Submenu = (item) => {
  const activePath = (path) => {
    let url = window.location.pathname;
    if (path === url) {
      return true;
    } else if (path === url.split("/")[1]) {
      return true;
    } else return false;
  };
  return (
    <>
      <SubMenuItems>
        {item.item.map((sdata, index) => {
          return (
            <SubSidebarLink
              to={sdata.path}
              key={index}
              active={activePath(sdata.path)}
            >
              <SubSidebarLabel>{sdata.navbar}</SubSidebarLabel>
            </SubSidebarLink>
          );
        })}
      </SubMenuItems>
    </>
  );
};

export default function Sidebar({ sidebarIsOpen }) {
  // const [open, setOpen] = useState("");
  // const toggle = (id) => setOpen(id);
  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [user, setUser] = useState({});
  const activePath = (path) => {
    const url = window.location.pathname;

    if (path === url) {
      return true;
    } else if (path === `/${url.split("/")[1]}`) {
      return true;
    } else return false;
  };

  useEffect(() => {
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  // console.log("__pp test ::", user);

  return (
    <>
      <SidebarMenu sidebaropen={sidebarIsOpen}>
        <UserDetails className="flex items-center sidebar-infodetails">
          <Picture>
            <ProfileImage src="./logo192.png" alt="..." />
            <p>{user && user?.name} </p>
          </Picture>
        </UserDetails>
        <hr />
        {SidebarData.map((item, index) => {
          return (
            <>
              <MenuItems key={index}>
                <SidebarLink to={item.path} active={activePath(item.path)}>
                  <SidebarLabel>{item.navbar}</SidebarLabel>
                </SidebarLink>
                {activePath(item.path) && item.child && (
                  <Submenu item={item.child} />
                )}
              </MenuItems>
            </>
          );
        })}
      </SidebarMenu>
    </>
  );
}
