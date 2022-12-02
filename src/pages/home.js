import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import { useAuth } from "../Component/store/AuthProvider";
// import useAuthContext from "../hook/ useAuthContext";

export default function Home() {
  const { user } = useAuth();
  const navigation = useNavigate();

  console.log("_pp test context userData::", user);

  if (user === "undefined" || user === "null") {
    localStorage.removeItem("user");
    navigation("/login");
  }

  const handleClick = () => {
    localStorage.setItem("userData", "test123");
    // login({
    //   localData: "test123",
    //   tokenData: "test56789",
    // });
  };
  return (
    <div>
      <h1>This is the home page </h1>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  );
}
