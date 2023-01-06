import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ProgessBar from "../../Component/ProgessBar";
import Button from "../../Component/Ui/Atoms/button";
import useFullpageLoader from "../../hook/useFullpageLoader";
import { Content } from "../../style/global.css.";
import { Wrapper } from "./service.css";

// const Wrapper = styled.div`
//   padding: 40px;
//   display: grid;
//   grid-template-columns: repeat(3, 2fr);
//   grid-gap: 5px;
//   > div {
//     display: flex;
//     border-radius: 15px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
//     padding: 40px;
//     flex-direction: row;
//     img {
//       width: 30%;
//       border-radius: 15px;
//     }
//     & > div {
//       flex: 1;
//       padding-left: 10px;
//     }
//     :hover {
//       box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
//       transition: all 0.3s ease;
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     display: block;

//     > div {
//       display: flex;
//       flex-direction: column;
//       img {
//         width: 80%;
//         border-radius: 15px;
//       }
//     }
//     img {
//       width: 100%;
//     }
//   }
// `;

export default function Service() {
  const [serviceData, setServiceData] = useState([]);
  const [loader, showLoader, hideLoader] = useFullpageLoader();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    // showLoader();
    setLoading(true);
    const data = await axios.get("https://dummyjson.com/products");
    // console.log("_pp test data ::", data.data.products);
    setServiceData(data.data.products);
    setLoading(false);
    // hideLoader();
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <ProgessBar />}
      <Content>
        <h2 className="common-heading">{t("labels.our_services")}</h2>

        <Wrapper>
          {serviceData.map((curElem, index) => (
            <div key={index}>
              <img src={curElem?.images[0]} alt="...." />
              <div>
                <p>{curElem?.description}</p>
                <div style={{ paddingTop: "20px" }}>
                  <Button label="Read More" bg="skyblue" disabled />
                </div>
              </div>
            </div>
          ))}
        </Wrapper>
      </Content>
    </>
  );
}
