import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
    let navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [ID,setID] = useState(null);

  console.log("firstName qw",firstName);
  console.log("lastName qw",lastName);
  console.log(" qw",ID);
  
  const body = { firstName, lastName };
  const sendDataToAPI = () => {
    axios.put(`https://631ef5cd58a1c0fe9f5c07b7.mockapi.io/Crud/${ID}`, body
    ).then(()=>{
        navigate('/read')
    })
  }
  useEffect(() =>{
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setID(localStorage.getItem('ID'));
  },[])
  return (
    <div>
        <Form.Group className="mb-3" >
          <Form.Label>FirstName</Form.Label>
          <input
            value={(!firstName)?"":firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>LastName</Form.Label>
          <input
            value={(!lastName)?"":lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={lastName}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendDataToAPI}>
          Update
        </Button>
    </div>
  );
}
export default Update;
