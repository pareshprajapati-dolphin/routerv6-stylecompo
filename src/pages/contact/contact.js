import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import styled from "styled-components";
import { Input } from "../../Component/Ui/Atoms/input";
import Button from "../../Component/Ui/Atoms/button";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import { StyledForm, StyledH1, StyledImage, StyleDiv } from "./contact.css";
import { Content } from "../../style/global.css.";

export default function Contact() {
  const navigator = useNavigate();
  const { t } = useTranslation();

  const [appToken, setAppToken] = useCookiesStorage("appToken");
  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [user, setUser] = useState({});
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/gif": [".gif"],
    },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      setFiles(URL.createObjectURL(acceptedFiles[0]));
      // setFiles(
      //   acceptedFiles.map((file) =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file),
      //     })
      //   )
      // );
      const base64String = await convertBase64(acceptedFiles[0]);
      console.log("base64::", base64String);
    },
  });

  const convertBase64 = (file) => {
    return new Promise((reslove, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        reslove(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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

  const handleSubmitt = (e) => {
    e.preventDefault();
    setContactData({
      firstname: "",
      lastname: "",
      email: "",
    });
  };

  const disablButton = useMemo(() => {
    if (
      contactData.firstname.length > 0 &&
      contactData.lastname.length > 0 &&
      contactData.email.length > 0
    )
      return false;
    else return true;
  }, [contactData]);

  // const thumbs = files.map((file) => (
  //   <div key={file}>
  //     <StyledImage src={file} />
  //   </div>
  // ));

  return (
    <>
      <Content>
        <div>
          <h1>{t("labels.contact_title")}</h1>
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
            labelName={t("labels.email_address")}
            value={contactData.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <StyleDiv {...getRootProps()}>
            <input className="input-zone" {...getInputProps()} />
            <div>
              <div>
                <p>Drag 'n' drop some files here, or click to select files</p>

                <p>
                  <label className="cursor-pointer" for="files">
                    Browse files
                  </label>
                </p>
              </div>
            </div>
          </StyleDiv>
          {/* <div>{thumbs}</div> */}
          <div>
            <StyledImage src={files} />
          </div>

          <div
            style={{
              display: " flex ",
              padding: "10px 0px",
              justifyContent: "space-between",
            }}
          >
            {!loading ? (
              <Button
                label="SignUp"
                type="submit"
                bg="#ff0099"
                color="#fff"
                disabled={disablButton}
                onClick={(e) => {
                  handleSubmitt(e);
                }}
              />
            ) : (
              <Button disabled processingIcon={true} />
            )}
            <Button
              label="Cancle"
              type="cancle"
              onClick={(e) => {
                navigator("/");
              }}
            />
          </div>
        </StyledForm>
      </Content>
    </>
  );
}
