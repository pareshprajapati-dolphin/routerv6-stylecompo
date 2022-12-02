// import moment from "moment";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Component/store/AuthProvider";
import Button from "../Component/Ui/Atoms/button";
import Input from "../Component/Ui/Atoms/input";

const StyledDiv = styled.div`
  display: block;
`;

const StyledH1 = styled.h1`
  display: flex;
  padding: 10px;
`;
const StyledForm = styled.form`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
`;

export default function Login() {
  const { user, login } = useAuth();
  const navigation = useNavigate();
  const [loginData, setLoginData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  let date = "2022-11-19T08:55:53.000000Z";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    if (loginData.email.length > 0 && loginData.password.length > 0) {
      localStorage.setItem("user", "test123");
      login({
        useData: "test123",
        token: "tokenTest",
      });
      navigation("/about");
    }
  };
  return (
    <>
      <StyledDiv>
        <StyledH1>Login page</StyledH1>
        {/* <div style={{ padding: "10px" }}>
          {moment(date).format("ddd, DD/MM/YYYY")}
        </div>
        <div style={{ padding: "10px" }}>
          {moment(date).calendar({
            //  sameDay: '[Today]',
            //  nextDay: '[Tomorrow]',
            //  nextWeek: 'dddd MMM DD',
            //  lastDay: '[Yesterday]',
            //  lastWeek: '[Last] dddd',
            sameElse: "DD/MM/YYYY dd hh:mm",
          })}
        </div> */}

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
          <Link href="/register">create new account</Link>
          <div style={{ display: " flex " }}>
            <Button
              label="Login"
              bg="blue"
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
        </StyledForm>
      </StyledDiv>
    </>
  );
}
