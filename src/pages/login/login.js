import React, { useEffect, useMemo, useState } from "react";
// import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { useAuth } from "../../Component/store/AuthProvider";
import Button from "../../Component/Ui/Atoms/button";
import { Input, PasswordInput } from "../../Component/Ui/Atoms/input";
import { loginApi } from "../../Api/apiService";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import CheckBox from "../../Component/Ui/Atoms/checkBox";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { addNewKey, addUser } from "../../redux/reducer/userReducer";
import { useTranslation } from "react-i18next";
import { StyledDiv, Form, StyledH1 } from "./loginStyle";

export default function Login() {
  // const { login, user, userToken } = useAuth();
  const navigation = useNavigate();
  const { t } = useTranslation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    isChecked: false,
  });

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState();
  const dispatch = useDispatch();

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
    setLoading(true);
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

    // if (
    //   loginData.email === "superadmin@dws.com" &&
    //   loginData.password === "admin123"
    // ) {
    //   let userdata = {
    //     name: "suerpadmin",
    //     email: "superadmin@dws.com",
    //     token: "876|jshdgf",
    //   };
    //   setAppToken(userdata.token);
    //   setLocalUser(userdata);
    //   toast.success("user login successfully");
    // } else {
    //   toast.error("email and password is invalid");
    //   setLoading(false);
    // }
  };

  const disableButton = useMemo(() => {
    if (
      loginData.email.length > 0 &&
      loginData.password.length > 0 &&
      loginData.isChecked
    ) {
      return false;
    } else return true;
  }, [loginData]);

  useEffect(() => {
    if (localUser !== undefined && appToken !== undefined) {
      navigation("/");
    } else {
      // dispatch(addNewKey(ObjectData));
      setAppToken();
      setLocalUser();
      navigation("/login");
    }
  }, [appToken, localUser, navigation]);

  const [passwordError, setPasswordError] = useState();

  const handleBlur = (e) => {
    // if (e.target.value === "") {
    //   if (e.target.name === "email") {
    //     setEmailError("Email cannot be blank.");
    //   } else if (e.target.name === "password") {
    //     setPasswordError("Password cannot be blank.");
    //   }
    // } else {
    //   if (e.target.name === "email") {
    //     setEmailError("");
    //   } else if (e.target.name === "password") {
    //     setPasswordError("");
    //   }
    // }
  };

  return (
    <>
      <StyledDiv>
        {/* <div style={{ padding: "10px" }}>
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
        </div> */}

        <Form>
          <StyledH1>Login Page</StyledH1>
          <Input
            id="email"
            name="email"
            type="text"
            value={loginData.email}
            labelName={t("labels.email_address")}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => {
              handleBlur(e);
            }}
          />
          {emailError && (
            <span style={{ color: "red", padding: "5px 0px" }}>
              {emailError}
            </span>
          )}
          <PasswordInput
            id="password"
            name="password"
            type="password"
            value={loginData.password}
            labelName={t("labels.password")}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={(e) => {
              handleBlur(e);
            }}
          />
          {passwordError && (
            <span style={{ color: "red", padding: "5px 0px" }}>
              {passwordError}
            </span>
          )}

          <CheckBox
            id="isChecked"
            name="isChecked"
            type="checkbox"
            value={loginData.isChecked}
            labelName=" Subscribe to newsletter?"
            onChange={(e) => handleChange(e)}
          />

          <div style={{ display: "flex", paddingTop: "10px" }}>
            {!loading ? (
              <Button
                bg="#ff0099"
                color="#fff"
                label="Login"
                disabled={disableButton}
                onClick={(e) => {
                  handleSubmitt(e);
                }}
              />
            ) : (
              <Button disabled processingIcon={true} />
            )}
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
        </Form>
      </StyledDiv>
    </>
  );
}
