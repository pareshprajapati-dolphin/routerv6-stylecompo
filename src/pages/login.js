import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Component/store/AuthProvider";
import Button from "../Component/Ui/Atoms/button";
import Input from "../Component/Ui/Atoms/input";
import { loginApi } from "../Api/apiService";
import { useLocalStorage } from "../hook/useLocalStorage";

const StyledDiv = styled.div`
  display: block;
  a {
    text-decoration: none;
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  padding: 10px;
`;
const StyledForm = styled.form`
  width: 100%;
  margin-left: 10px;
  margin-right: auto;
  display: inline-block;
`;

export default function Login() {
  // const { login, user, userToken } = useAuth();
  const navigation = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  let date = "2022-12-04T08:55:53.000000Z";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    // if (loginData.email.length > 0 && loginData.password.length > 0) {
    //   localStorage.setItem("user", "test123");
    //   login({
    //     useData: "test123",
    //     token: "tokenTest",
    //   });
    //   navigation("/about", { replace: true });
    // }

    const data = await loginApi(loginData);
    if (data.status === 200) {
      setLocalUser(data.data);

      // login(data, data?.data?.token);
      navigation("/", { replace: true });
    }
  };

  useEffect(() => {
    if (localUser === undefined) {
      navigation("/login");
    } else {
      navigation("/");
    }
  }, [localUser, navigation]);

  return (
    <>
      <StyledDiv>
        <StyledH1>Login page</StyledH1>
        <div style={{ padding: "10px" }}>
          {moment(date).format("ddd, DD/MM/YYYY")}
        </div>
        <div style={{ padding: "10px" }}>
          {moment(date).calendar({
            // sameDay: "[Today]",
            // nextDay: "[Tomorrow]",
            // nextWeek: "dddd MMM DD",
            // lastDay: "[Yesterday]",
            // lastWeek: "[Last] dddd",
            sameElse: "ddd DD/MM/YYYY  hh:mm",
          })}
        </div>

        <StyledForm>
          <Input
            id="email"
            name="email"
            type="text"
            labelName="Email Address"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Input
            id="password"
            name="password"
            type="password"
            labelName="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div style={{ display: " flex " }}>
            <Button
              label="Login"
              primary="primary"
              onClick={(e) => {
                handleSubmitt(e);
              }}
            />
            <Button
              label="Cancle"
              varient="outline"
              onClick={() => {
                console.log("_pp test click in cancle button");
              }}
            />
          </div>
          <StyledH1>
            create new account?
            <Link to="/create-account"> Sign up</Link>
          </StyledH1>
        </StyledForm>
      </StyledDiv>
    </>
  );
}
