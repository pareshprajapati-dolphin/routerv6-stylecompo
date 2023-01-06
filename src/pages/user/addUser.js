import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Component/Ui/Atoms/button";
import { Input } from "../../Component/Ui/Atoms/input";
import { Content } from "../../style/global.css.";
import { StyledForm } from "../contact/contact.css";

export default function AddUser() {
  const navigator = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
  };

  const disablButton = useMemo(() => {
    if (
      user.firstname.length > 0 &&
      user.lastname.length > 0 &&
      user.email.length > 0
    )
      return false;
    else return true;
  }, [user]);

  return (
    <Content>
      <div>
        <h1> Add User</h1>
      </div>

      <StyledForm>
        <Input
          id="firstname"
          name="firstname"
          type="text"
          labelName="FirstName"
          value={user.firstname}
          onChange={(ev) => {
            handleChange(ev);
          }}
        />
        <Input
          id="lastname"
          name="lastname"
          type="text"
          labelName="LastName"
          value={user.lastname}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <Input
          id="email"
          name="email"
          type="text"
          labelName="email Address"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        {/* <div>{thumbs}</div> */}

        <div
          style={{
            display: " flex ",
            padding: "10px 0px",
            justifyContent: "space-between",
          }}
        >
          <Button
            label="SignUp"
            type="submit"
            bg="#3399ff"
            color="#fff"
            disabled={disablButton}
            onClick={(e) => {
              handleSubmitt(e);
            }}
          />

          <Button
            label="Cancle"
            type="cancle"
            onClick={(e) => {
              navigator("/user");
            }}
          />
        </div>
      </StyledForm>
    </Content>
  );
}
