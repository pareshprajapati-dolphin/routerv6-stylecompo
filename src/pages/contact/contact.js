import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import styled from "styled-components";
import { Input } from "../../Component/Ui/Atoms/input";
import Button from "../../Component/Ui/Atoms/button";

const StyledH1 = styled.h1`
  display: flex;
  padding: 10px;
`;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export default function Contact() {
  const navigator = useNavigate();

  const [appToken, setAppToken] = useCookiesStorage("appToken");
  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [user, setUser] = useState({});
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localUser || !appToken) {
      navigator("/login");
    }
  }, [appToken, localUser, navigator]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <h1>This is the contact page</h1>
        <NavLink to={`${4}`}> edit contact</NavLink>
      </div>

      <StyledForm>
        <StyledH1>Contact page</StyledH1>
        <Input
          id="firstname"
          name="firstname"
          type="text"
          labelName="FirstName"
          value={contactData.firstname}
          onChange={(ev) => {
            handleChange(ev);
          }}
        />
        <Input
          id="lastname"
          name="lastname"
          type="text"
          labelName="LastName"
          value={contactData.lastname}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <Input
          id="email"
          name="email"
          type="text"
          labelName="Email Address"
          value={contactData.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <div style={{ display: " flex ", padding: "10px 0px" }}>
          {!loading ? (
            <Button
              label="SignUp"
              bg="#ff0099"
              color="#fff"
              // onClick={(e) => {
              //   handleSubmitt(e);
              // }}
            />
          ) : (
            <Button disabled processingIcon={true} />
          )}
          <Button
            label="Cancle"
            onClick={(e) => {
              console.log("_pp test");
              e.preventDefault();
              navigator("/");
            }}
          />
        </div>
      </StyledForm>
    </>
  );
}
