import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Component/store/AuthProvider";
import { useLocalStorage } from "../hook/useLocalStorage";
// import useAuthContext from "../hook/ useAuthContext";

export default function Home() {
  // const { user, userToken, logout } = useAuth();
  const navigation = useNavigate();
  const [localUser, setLocalUser] = useLocalStorage("userdata");

  useEffect(() => {
    if (localUser === undefined) {
      navigation("/login");
    } else {
    }
  }, [localUser, navigation]);

  // const handleClick = () => {
  //   localStorage.setItem("userData", "test123");
  // };
  return (
    <div>
      <h1>This is the home page </h1>
      {/* <button onClick={() => handleClick()}>Click</button> */}
    </div>
  );
}
