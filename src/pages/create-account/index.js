import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { signup } from "../../Api/apiService";
import Button from "../../Component/Ui/Atoms/button";
import CheckBox from "../../Component/Ui/Atoms/checkBox";
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
    email: "",
    password: "",
    password_confirmation: "",
    gender: "mr",
    termCondi: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setRegiData({
        ...regiData,
        [name]: checked,
      });
    } else
      setRegiData({
        ...regiData,
        [name]: value,
      });
  };
  const handleSubmitt = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(regiData).forEach((key) => {
      formData.append(key, regiData[key]);
    });

    const data = await signup(formData);
    if (data.status === 200) {
      toast.success(data.message);
      navigator("/login");
    } else {
      toast.error(data.message);
    }
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
          <Input
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            value={regiData.password_confirmation}
            labelName="Retype-Password"
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
          <div>
            <CheckBox
              id="termCondi"
              name="termCondi"
              type="checkbox"
              labelName="I agree to the terms and conditions."
              value={regiData.termCondi}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div style={{ display: " flex ", padding: "10px 0px" }}>
            <Button
              label="SignUp"
              bg="#ff0099"
              color="#fff"
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
            <Button
              varient="outline"
              disabled
              processingIcon={true}
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
