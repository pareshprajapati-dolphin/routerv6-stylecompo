import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Component/Ui/Atoms/button";
import { Input } from "../../Component/Ui/Atoms/input";
import { StyledForm, StyledH1 } from "./edituser.css";

export default function EditUser() {
  const { id } = useParams();
  const [editData, setEditData] = useState({});
  const navigator = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://api.instantwebtools.net/v1/passenger/${id}`)
        .then((res) => {
          console.log("_pp test ", res?.data);
          setEditData(res?.data);
        })
        .catch((err) => {
          console.log("_pp test err", err);
        });
    })();
  }, [id]);

  return (
    <>
      <StyledForm>
        <StyledH1>Edit page</StyledH1>
        <Input
          id="firstname"
          name="firstname"
          type="text"
          labelName="Passeger Name"
          value={editData?.name}
          onChange={(ev) => {
            // handleChange(ev);
          }}
        />
        <Input
          id="lastname"
          name="lastname"
          type="text"
          labelName="Trip"
          value={editData?.trips}
          onChange={(e) => {
            // handleChange(e);
          }}
        />
        <Input
          id="lastname"
          name="lastname"
          type="text"
          labelName="Airline Name"
          value={editData?.name}
          onChange={(e) => {
            // handleChange(e);
          }}
        />

        <div
          style={{
            display: " flex ",
            padding: "10px 0px",
            justifyContent: "space-between",
          }}
        >
          <Button
            label="SignUp"
            bg="#ff0099"
            color="#fff"
            onClick={(e) => {
              // handleSubmitt(e);
            }}
          />

          <Button
            label="Cancle"
            type="cancle"
            onClick={(e) => {
              // e.preventDefault();
              navigator("/user");
            }}
          />
        </div>
      </StyledForm>
    </>
  );
}
