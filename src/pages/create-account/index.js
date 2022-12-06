import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Component/Ui/Atoms/button";
import Input from "../../Component/Ui/Atoms/input";
import Select from "../../Component/Ui/Atoms/select";

const StyledDiv = styled.div`
  display: block;
  padding-top: 10px;
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

export default function CreateAccount() {
  const navigator = useNavigate();
  const [regiData, setRegiData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    gender: "mr",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegiData({
      ...regiData,
      [name]: value,
    });
  };
  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log("_pp test data::", regiData);
  };

  return (
    <>
      <StyledDiv>
        <StyledH1>Create new account</StyledH1>
        <StyledForm>
          <Input
            id="firstname"
            name="firstname"
            type="text"
            labelName="FirstName"
            value={regiData.firstname}
            onChange={(ev) => {
              handleChange(ev);
            }}
          />
          <Input
            id="lastname"
            name="lastname"
            type="text"
            labelName="LastName"
            value={regiData.lastname}
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <Input
            id="email"
            name="email"
            type="text"
            labelName="Email Address"
            value={regiData.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value={regiData.passowrd}
            labelName="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <Select
            labelName="Gender"
            name="gender"
            value={regiData.gender}
            onChange={(e) => {
              handleChange(e);
            }}
            optionList={[
              { value: "mr", name: "Mr" },
              { value: "miss", name: "Miss" },
              { value: "other", name: "Other" },
            ]}
          />

          <div style={{ display: " flex " }}>
            <Button
              label="SignUp"
              primary="primary"
              onClick={(e) => {
                handleSubmitt(e);
              }}
            />
            <Button
              label="Cancle"
              varient="outline"
              onClick={() => {
                navigator("/login");
              }}
            />
          </div>
        </StyledForm>
        <StyledH1>
          Already Account?
          <Link to="/login" style={{ marginLeft: "7px" }}>
            login
          </Link>
        </StyledH1>
      </StyledDiv>
    </>
  );
}
