import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Callapi() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("jsonnn", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
   
  const postPutEvent =() => {
    const data = {
      // id: 'def234',
      name: 'Seema',
      mobile: '8674879504',
      designation: ' intern developer',
      pin: '45678'
    }
    const url = data.id ? `https://jsonplaceholder.typicode.com/comments/${data.id}`:"https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: data.id ? 'PUT' :'POST',
      headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify(data) 
    })
      .then(response =>{
        console.log("response from button",response.id)
        if(response.status === 201){
          alert("success")
        }
      }).catch((e) => {
        console.log("e", e);
      });
  }
  return (
    <div>
      <div>Callapi</div>
      {data.map((item) => {
        return <div>{item.email}</div>;
      })}
      <Button onClick = {postPutEvent}>Submit</Button>
    </div>
  );
}

export default Callapi;
