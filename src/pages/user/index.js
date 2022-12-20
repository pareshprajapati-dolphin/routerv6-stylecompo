import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Pagination from "../../Component/Pagination";
import Select from "../../Component/Ui/Atoms/select";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import useFullpageLoader from "../../hook/useFullpageLoader";
import useLocalStorage from "../../hook/useLocalStorage";

const TableContainer = styled.div`
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.08);
  }
  thead {
    height: 64px;
    background: #3c1742;
  }
  thead th {
    font-size: 14px;
    color: #ff0099;
    text-align: left;
    padding: 0px 30px;
  }
  tr {
    height: 64px;
    border-bottom: 2px solid grey;
  }
  tr td {
    padding: 0px 30px;
    border-bottom: 1px solid #3c1742;
  }
  @media only screen and (max-width: 992px) {
    table {
      white-space: nowrap;
    }
  }
`;

export default function User() {
  const [user, setUser] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState();
  const [currentpage, setCurrentPage] = useState(1);
  const navigation = useNavigate();
  const [loader, showLoader, hideLoader] = useFullpageLoader();

  const [localUser] = useLocalStorage("userdata");
  const [appToken] = useCookiesStorage("appToken");

  useEffect(() => {
    if (!localUser || !appToken) {
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

  return (
    <>
      <div className="mt-2">
        <div className="ms-2">
          <Select
            labelName="page"
            name="page_per_item"
            onChange={(e) => {
              setPageSize(e.target.value);
            }}
            optionList={[
              { value: 10, name: "10" },
              { value: 20, name: "20" },
              { value: 50, name: "50" },
            ]}
          />
        </div>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Passenger Name</th>
                <th scope="col">Passenger Trip</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? (
                user.map((passenger, id) => {
                  return (
                    <tr key={id}>
                      <td scope="row">{id + 1}</td>
                      <td>{passenger.name}</td>
                      <td>{passenger.trips}</td>
                      <td>
                        <Link to={`${passenger._id}`} className="ml-2">
                          edit
                        </Link>
                        <button
                          style={{ marginLeft: "5px" }}
                          onClick={(e) => handleDelete(e, passenger._id)}
                        >
                          {" "}
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <>no Data found</>
              )}
            </tbody>
          </table>
        </TableContainer>
        <div style={{ margin: "10px 0px" }}>
          <Pagination
            total={total}
            pageSize={pageSize}
            page={currentpage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      {loader}
    </>
  );
}
