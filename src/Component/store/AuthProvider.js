import { useState, useMemo, createContext, useContext, useEffect } from "react";
// import { getUser } from "./auth.js";
// import AuthContext from "./AuthContext";
import Cookies from "js-cookie";
import { useLocalStorage } from "./useLocalStorage";
import { useSessionStorage } from "./useSessionStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [store, setStore] = useLocalStorage("userData");
  const [user, setUser] = useLocalStorage("user");
  const [loginData, setLoginData] = useState(false);
  const [userToken, setUserToken] = useSessionStorage("token");

  const login = async (data) => {
    console.log("_pp test user Data pass in context:", data);
    setLoginData(true);
    setUser(data.useData);
    setUserToken(data.token);
    // setUser(data);

    return true;
  };

  const logout = (props) => {
    localStorage.removeItem("user");
    Cookies.remove("token");
    props("/login");
    // setUser(false);
    // setUser("");
    // setUserToken("");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      loginData,
      userToken,
      logout,
      // store,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
