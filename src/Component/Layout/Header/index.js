import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import routes from "../../Routes";
import styled, { css } from "styled-components";
import LogoutIcon from "../../Icons/logoutIcon";
import useLocalStorage from "../../../hook/useLocalStorage";
import { useCookiesStorage } from "../../../hook/useCookiesStorage";
import { useTranslation } from "react-i18next";
import Select from "../../Ui/Atoms/select";
import i18next from "i18next";
import Cookies from "js-cookie";

const Wrapper = styled.section`
  padding: 2px 0px;
  position: sticky;
  top: 0px;
  z-index: 1;
  background: ${({ theme }) => theme.colors.header};
  > ul {
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
    }
  }
  a {
    text-decoration: none;
    color: #003333;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  padding: 10px;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    color: #000;
    border-radius: 30px;
    cursor: pointer;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: rgb(173 163 223);
      border-radius: 30px;
    `}
`;
const StyledButton = styled.button`
  // margin-left: auto;
  border: 0;
  background: none;
  cursor: pointer;
`;
const StyledDivt = styled.li`
  margin-left: auto;
  > select {
    width: auto;
    background: none;
    border: none;
    margin-right: 20px;
    box-sizing: border-box;
  }
`;

const optionList = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

export default function Header() {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = optionList.find(
    (l) => l.code === currentLanguageCode
  );
  const location = useLocation();
  const navigation = useNavigate();
  const { t } = useTranslation();

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");

  const [arrayState, setArrayState] = useState([]);

  const handleLogout = () => {
    setLocalUser();
    setAppToken();
    navigation("/login");
  };

  // useEffect(() => {
  //   const arr = [];
  //   routes.map((e) => {
  //     arr.push({ ...e, navbar: t(`labels.${e?.navbar?.toLowerCase()}`) });
  //   });
  //   setArrayState(arr);
  // }, []);
  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  return (
    <>
      <Wrapper>
        <ul>
          {routes.map((router, idx) => (
            <StyledLi active={router.path === location.pathname} key={idx}>
              <Link to={router.path}>{router.navbar}</Link>
            </StyledLi>
          ))}

          <StyledDivt>
            <select
              className="select"
              value={currentLanguageCode}
              onChange={(e) => {
                i18next.changeLanguage(e.target.value);
              }}
            >
              {optionList.map((optionData, i) => {
                return (
                  <option value={optionData.code} key={i}>
                    {optionData.name}
                  </option>
                );
              })}
            </select>

            <StyledButton
              onClick={(e) => {
                handleLogout(e);
              }}
            >
              <LogoutIcon width={25} height={25} />
            </StyledButton>
          </StyledDivt>
        </ul>
      </Wrapper>
      <Outlet />
    </>
  );
}
