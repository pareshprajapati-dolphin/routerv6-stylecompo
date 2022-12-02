import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Component/store/AuthProvider";
import Cookies from "js-cookie";

export default function About() {
  const { userToken, user, logout } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    if (user === "undefined" || userToken === "undefined") {
      logout(navigation);

      // localStorage.removeItem("user");
      // Cookies.remove("token");
      // navigation("/login");
    }
  }, []);

  console.log("_pp test user::", typeof user);

  return (
    <>
      <div>
        <h1>This is the About page</h1>
        <h2>
          {" "}
          user data form the context data {user} and user token {userToken}
        </h2>
      </div>
    </>
  );
}
