import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Component/Ui/Atoms/button";
import { Input } from "../../Component/Ui/Atoms/input";
import { Content } from "../../style/global.css.";
import { StyledForm, StyledH1 } from "./edituser.css";

const Buttondiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

export default function EditUser() {
  const { id } = useParams();
  const [editData, setEditData] = useState({
    name: "",
    trips: "",
  });
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();

    await axios
      .put(`https://api.instantwebtools.net/v1/passenger/${id}`, editData)
      .then((res) => {
        navigator("/user");
      })
      .catch((err) => {
        console.log("err::", err);
      });
  };

  useEffect(() => {
    (async () => {
      await axios
        .get(`https://api.instantwebtools.net/v1/passenger/${id}`)
        .then((res) => {
          // console.log("_pp test ", res?.data);
          setEditData(res?.data);
        })
        .catch((err) => {
          console.log("_pp test err", err);
        });
    })();
  }, [id]);

  return (
    <>
      <Content>
        <StyledForm onSubmit={handleSubmitt}>
          <StyledH1>Edit page</StyledH1>
          <Input
            id="firstname"
            name="name"
            type="text"
            labelName="Passeger Name"
            value={editData?.name}
            onChange={(ev) => {
              handleChange(ev);
            }}
          />
          <Input
            id="lastname"
            name="trips"
            type="text"
            labelName="Trip"
            value={editData?.trips}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/* <Input
            id="lastname"
            name="airlinename"
            type="text"
            labelName="Airline Name"
            value={editData?.name}
            onChange={(e) => {
              // handleChange(e);
            }}
          /> */}

          <Buttondiv>
            <Button label="SignUp" bg="#ff0099" color="#fff" />

            <Button
              label="Cancle"
              type="cancle"
              onClick={(e) => {
                // e.preventDefault();
                navigator("/user");
              }}
            />
          </Buttondiv>
        </StyledForm>
      </Content>
    </>
  );
}
