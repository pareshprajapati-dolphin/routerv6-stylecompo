import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../hook/useLocalStorage";
import { useCookiesStorage } from "../hook/useCookiesStorage";

export default function Contact() {
  const navigation = useNavigate();

  const [appToken, setAppToken] = useCookiesStorage("appToken");
  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!localUser || !appToken) {
      navigation("/login");
    }
  }, [appToken, localUser, navigation]);

  return (
    <>
      <div>
        <h1>This is the contact page</h1>
        <NavLink to={`${4}`}> edit contact</NavLink>
      </div>
    </>
  );
}
