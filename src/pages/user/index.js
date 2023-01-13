import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "../../Component/Pagination";
import Button from "../../Component/Ui/Atoms/button";
import HeaderText from "../../Component/Ui/Atoms/heading/headerText";
import Select from "../../Component/Ui/Atoms/select";
import Table from "../../Component/Ui/Atoms/Table";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import useFullpageLoader from "../../hook/useFullpageLoader";
import useLocalStorage from "../../hook/useLocalStorage";
import { Content } from "../../style/global.css.";
import { TableHeader } from "./edituser.css";

export default function User() {
  const [user, setUser] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState();
  const [currentpage, setCurrentPage] = useState(1);
  const navigation = useNavigate();
  const [loader, showLoader, hideLoader] = useFullpageLoader();

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");

  useEffect(() => {
    if (!localUser || !appToken) {
      setAppToken();
      setLocalUser();
      navigation("/login");
    }
  }, [appToken, localUser, navigation]);

  const getUser = useCallback(async () => {
    showLoader();
    await axios
      .get(
        `https://api.instantwebtools.net/v1/passenger?page=${currentpage}&size=${pageSize}`
      )
      .then((res) => {
        setUser(res.data.data);
        setTotal(res.data.totalPassengers);
        hideLoader();
      })
      .catch((err) => {
        console.log("__pp test error::", err);
      });
  }, [currentpage, pageSize]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleDelete = (e, id) => {
    axios
      .delete(`https://api.instantwebtools.net/v1/passenger/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        getUser();
      })
      .catch((err) => {
        console.log();
      });
  };
  const tableHeader = [
    {
      key: "_id",
      title: "Id",
    },
    {
      key: "name",
      title: "Passenger Name",
    },
    {
      key: "trips",
      title: "Passenger Trip",
    },
    {
      key: "action",
      title: "Action",
    },
  ];
  const [test, setTest] = useState();

  const handleChange = (e) => {
    setTest(e.target.value);
  };

  return (
    <>
      <Content>
        <div>
          <TableHeader>
            <HeaderText varient="h1">User</HeaderText>
            <Button
              bg="#3577f1"
              color="#fff"
              label="Add User"
              onClick={() => navigation("/user/adduser")}
            />
          </TableHeader>

          <Table tableHeader={tableHeader} tableData={user} />

          <Select
            labelName="page"
            name="page_per_item"
            onChange={(e) => {
              setPageSize(e.target.value);
              setCurrentPage(1);
            }}
            optionList={[
              { value: 10, name: "10" },
              { value: 20, name: "20" },
              { value: 50, name: "50" },
            ]}
          />
          <div>
            <Pagination
              total={total}
              pageSize={pageSize}
              page={currentpage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </Content>
    </>
  );
}
