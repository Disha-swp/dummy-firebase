import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Create() {
    let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);

  const body = { firstName, lastName };
  const sendDataToAPI = () => {
    axios.post(`https://631ef5cd58a1c0fe9f5c07b7.mockapi.io/Crud`,body
    ).then((response) => {
        // console.log(response)
        navigate('/read')
    });
  };
  return (
    <div>
      
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>FirstName</Form.Label>
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="FirstName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>LastName</Form.Label>
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="LastName"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      
    </div>
  );
}

export default Create;
