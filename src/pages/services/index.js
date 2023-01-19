import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProgessBar from "../../Component/ProgessBar";
import Button from "../../Component/Ui/Atoms/button";

import { Content } from "../../style/global.css.";
import { Wrapper } from "./service.css";

export default function Service() {
  const [serviceData, setServiceData] = useState([]);
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
