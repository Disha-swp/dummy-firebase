import { useEffect, useState } from 'react';
import './App.css';
import {db} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc} from "firebase/firestore";
// import { async } from '@firebase/util';

function App() {

  const [newName, setNewName] = useState("")
  const [newDesignation, setNewDesignation] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newEmpId, setNewEmpId] = useState("")
  const [users,setUsers] = useState([]); 
  const usersCollectionref = collection(db,"users-Empdetails");

  const createUser = async () =>{
    await addDoc(usersCollectionref, {name: newName, designation: newDesignation, email: newEmail, emp_id: newEmpId});
  }

  const updateUser = async (id,email) =>{
    const userDoc = doc(db,"users-Empdetails", id)
    const newFields = {email: email}
    
    await updateDoc( userDoc ,newFields)
  }

  useEffect(() => {
    const getUsers = async() =>{
        const data = await getDocs(usersCollectionref);
        // console.log(data);
        setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getUsers();
    }, []); 
    
  return (
    <div className="App">
      <input placeholder='name...'
      onChange={(event) => {
        setNewName(event.target.value);
      }}
      />
      <input placeholder='designation...'
      onChange={(event) => {
        setNewDesignation(event.target.value);
      }}
      />
      <input placeholder='email...'
      onChange={(event) => {
        setNewEmail(event.target.value);
      }}
      />
      <input placeholder='emp_id...'
      onChange={(event) => {
        setNewEmpId(event.target.value);
      }}
      />

      <button onClick = {createUser}>Create User</button>

      {users.map((users)=>{
        return <div>
           {" "}
           <h1>Name: {users.name}</h1>
           <h1>Designation: { users.designation}</h1>
           <h1>Email: {users.email}</h1>
           <h1>emp_id: {users.emp_id}</h1>
           <button onClick={() => {updateUser(users.id,users.email)}}> edit details</button>
          </div>
        })}
    </div>
  );
}

export default App;
