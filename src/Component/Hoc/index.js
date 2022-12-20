import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import useLocalStorage from "../../hook/useLocalStorage";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [localUser, setLocalUser] = useLocalStorage("userdata");
    const [appToken, setAppToken] = useCookiesStorage("appToken");
    const navigation = useNavigate();

    console.log("_pp test ::", localUser);
    if (!localUser || !appToken) {
      navigation("/login");
    } else return <WrappedComponent />;

    return null;
  };
};

export default withAuth;

const withAuthData = (wrappedComponent) => {
  const test = "test";

  return (props) => {
    if (test === "test ") {
      return <wrappedComponent />;
    } else return false;

    return null;
  };
};
