import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../Component/store/AuthProvider";
import Button from "../../Component/Ui/Atoms/button";
import Input from "../../Component/Ui/Atoms/input";
import { loginApi } from "../../Api/apiService";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import CheckBox from "../../Component/Ui/Atoms/checkBox";
import { toast } from "react-toastify";

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
    isChecked: false,
  });

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");

  let date = "2022-12-04T08:55:53.000000Z";

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setLoginData({
        ...loginData,
        [name]: checked,
      });
    } else {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    }
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    console.log("-- test :", loginData);

    const data = await loginApi(loginData);
    if (data.status === 200) {
      setLocalUser(data.data);
      setAppToken(data?.data?.token);
      toast.success(data.message);
      // login(data, data?.data?.token);
      navigation("/", { replace: true });
    } else {
      toast.error(data?.message);
    }
  };

  useEffect(() => {
    if (localUser !== undefined && appToken !== undefined) {
      navigation("/");
    } else {
      setAppToken();
      setLocalUser();
      navigation("/login");
    }
  }, [appToken, localUser, navigation]);

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
            value={loginData.email}
            labelName="Email Address"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={loginData.password}
            labelName="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <CheckBox
            id="isChecked"
            name="isChecked"
            type="checkbox"
            value={loginData.isChecked}
            labelName=" Subscribe to newsletter?"
            onChange={(e) => handleChange(e)}
          />

          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Button
              bg="#ff0099"
              color="#fff"
              label="Login"
              onClick={(e) => {
                handleSubmitt(e);
              }}
            />
            <Button
              label="Cancle"
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
