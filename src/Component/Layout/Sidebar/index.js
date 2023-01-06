import React, { useEffect, useState } from "react";
import useLocalStorage from "../../../hook/useLocalStorage";
import {
  MenuItems,
  SidebarMenu,
  SubMenuItems,
  SidebarLink,
  SidebarLabel,
  UserDetails,
  Picture,
  ProfileImage,
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
        path: "/contact/addcontact",
        navbar: "Add Contact",
      },
      // {
      //   path: "/contact/2",
      //   navbar: "Edit Contact",
      // },
    ],
  },
  {
    path: "/user",
    navbar: "User",
    child: [
      {
        path: "/user/adduser",
        navbar: "Add user",
      },
    ],
  },
  {
    path: "/details",
    navbar: "details",
  },
];

const activePath = (path) => {
  const url = window.location.pathname;

  if (path === url) {
    return true;
  } else if (path === `/${url.split("/")[1]}`) {
    return true;
  } else return false;
};

const Submenu = (item) => {
  return (
    <SidebarLink to={item?.item?.path} active={activePath(item?.item?.path)}>
      <SidebarLabel>{item?.item?.navbar}</SidebarLabel>
    </SidebarLink>
  );
};

export default function Sidebar({ sidebarIsOpen }) {
  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localUser) {
      setUser(localUser);
    }
  }, [localUser]);

  return (
    <>
      <SidebarMenu sidebaropen={sidebarIsOpen}>
        <UserDetails>
          <Picture>
            {/* <ProfileImage src="./logo192.png" alt="..." /> */}
            <p style={{ color: "#000000" }}>{user && user?.name} </p>
          </Picture>
        </UserDetails>
        <hr />
        {SidebarData.map((item, index) => {
          return (
            <>
              <MenuItems key={index}>
                <Submenu item={item} />
                {activePath(item.path) &&
                  item?.child &&
                  item?.child?.map((sdata, i) => {
                    return (
                      <SubMenuItems key={i}>
                        <Submenu item={sdata} />
                      </SubMenuItems>
                    );
                  })}
              </MenuItems>
            </>
          );
        })}
      </SidebarMenu>
    </>
  );
}
