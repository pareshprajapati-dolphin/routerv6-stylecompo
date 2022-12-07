import { useState, useMemo, createContext, useContext } from "react";
// import { getUser } from "./auth.js";
// import AuthContext from "./AuthContext";
import Cookies from "js-cookie";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user");
  const [loginData, setLoginData] = useState(false);
  const [userToken, setUserToken] = useCookiesStorage("token");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login = async (data, token) => {
    setLoginData(true);
    setUser(data?.data);
    setUserToken(token);
    // setUser(data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = (props) => {
    localStorage.removeItem("user");
    Cookies.remove("token");

    // setUser(false);
    setUser();
    setUserToken();
  };

  const value = useMemo(
    () => ({
      user,
      login,
      setUser,
      loginData,
      userToken,
      logout,
      // store,
    }),
    [login, loginData, logout, setUser, user, userToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
