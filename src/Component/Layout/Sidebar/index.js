import React, { useEffect, useState } from "react";
import useLocalStorage from "../../../hook/useLocalStorage";
import CarletDown from "../../Icons/carletDown";
import CarletLeft from "../../Icons/carletLeft";
import CarRounded from "../../Icons/carRounded";
import {
  MenuItems,
  SidebarMenu,
  SubMenuItems,
  SidebarLink,
  SidebarLabel,
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
        icon: <CarRounded />,
        path: "/service/newservice",
        navbar: "New Service",
      },
      {
        icon: <CarRounded />,
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
        icon: <CarRounded />,
        path: "/contact/addcontact",
        navbar: "Add Contact",
      },
    ],
  },
  {
    path: "/user",
    navbar: "User",
    child: [
      {
        icon: <CarRounded />,
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
      {item?.item?.icon && item.item?.icon}
      <SidebarLabel>{item?.item?.navbar}</SidebarLabel>
      {item?.item?.child ? (
        activePath(item?.item?.path) ? (
          <CarletDown />
        ) : (
          <CarletLeft />
        )
      ) : (
        ""
      )}
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
        <div>
          <Picture>
            {/* <ProfileImage src="./logo192.png" alt="..." /> */}
            <p style={{ color: "#ffff" }}>{user && user?.name} </p>
          </Picture>
        </div>

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
