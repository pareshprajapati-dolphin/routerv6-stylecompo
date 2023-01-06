import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Component/Ui/Atoms/button";
import CheckBox from "../../Component/Ui/Atoms/checkBox";
import { Input, PasswordInput } from "../../Component/Ui/Atoms/input";
import Select from "../../Component/Ui/Atoms/select";
import { addUser } from "../../redux/reducer/userReducer";

const StyledH1 = styled.h1``;
const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  padding: 0px 16px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  a {
    text-decoration: none;
  }
`;

export default function CreateAccount() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [regiData, setRegiData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
    gender: "mr",
    termCondi: false,
  });
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    dispatch(addUser(regiData));
    setLoading(false);
    navigator("/login");
  };

  const disableButton = useMemo(() => {
    if (
      regiData.firstname.length > 0 &&
      regiData.lastname.length > 0 &&
      regiData.email.length > 0 &&
      regiData.password.length > 0 &&
      regiData.termCondi
    )
      return false;
    else return true;
  }, [regiData]);

  return (
    <>
      <StyledDiv>
        <StyledForm>
          <StyledH1>Create new account</StyledH1>
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
          <PasswordInput
            id="password"
            name="password"
            type="password"
            value={regiData.password}
            labelName="Password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <PasswordInput
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
          <div style={{ padding: "10px 0px" }}>
            <CheckBox
              id="termCondi"
              name="termCondi"
              type="checkbox"
              labelName="I agree to the terms and conditions."
              value={regiData.termCondi}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div
            style={{
              display: " flex ",
              marginTop: "2rem",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {!loading ? (
              <Button
                label="SignUp"
                bg="#339999"
                color="#fff"
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
                navigator("/login");
              }}
            />
          </div>
          <StyledH1>
            Already Account?
            <Link to="/login" style={{ marginLeft: "7px" }}>
              login
            </Link>
          </StyledH1>
        </StyledForm>
      </StyledDiv>
    </>
  );
}
