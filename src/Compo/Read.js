import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Read() {
    let navigate = useNavigate();
  const [apiData, setApiData] = useState([]);
  const setData = (id, fname, lname) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", fname);
    localStorage.setItem("lastName", lname);
  };
  const getData = () => {
    axios
      .get(`https://631ef5cd58a1c0fe9f5c07b7.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  useEffect(() => {
    getData()
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://631ef5cd58a1c0fe9f5c07b7.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
        navigate('/read')
      });
  };

  return (
    <div>
      {apiData.map((data) => {
        return (
          <div key={data.id}>
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
            <Link to="/update">
              <Button
                color="green"
                onClick={() => {
                  setData(data.id, data.firstName, data.lastName);
                }}
              >
                Update
              </Button>
            </Link>
            <Link to="/delete">
              <Button color="red" onClick={() => onDelete(data.id)}>
                Delete
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Read;
