import React, { useState, useEffect} from "react";
import { Row, Container, Button, Modal, Form } from "react-bootstrap";
import "../App.css";
import { db } from "../firebase-config";
// users-Empdetails = users-Empdetails
// import { db } from "../base.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import NavBar from "../Pages/NavBar";

const Employee = () => {
  console.log("firebae conn chk", db);
  const [newName, setNewName] = useState("");
  const [newDesignation, setNewDesignation] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newEmpId, setNewEmpId] = useState("");
  const [users, setUsers] = useState([]);

  const [showEdit, setShowEdit] = useState(false);

  const usersCollectionref = collection(db, "users-Empdetails");

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();

  const handleClose = () => {
    setShow(false);
    setModalData(undefined);
    setShowEdit(false);
  };
  const createUser = async () => {
    console.log("create user function called");
    try {
      const res = await addDoc(usersCollectionref, {
        name: newName,
        designation: newDesignation,
        email: newEmail,
        emp_id: newEmpId,
      });
      if (res) {
        alert("added successfully");
      }
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (id) => {
    console.log(id);
    const empdocref = doc(db, "users-Empdetails", id);
    await updateDoc(empdocref, {
      name: newName,
      designation: newDesignation,
      email: newEmail,
      emp_id: newEmpId,
    });
    getUsers();
    setShowEdit(false);
    console.log(id);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users-Empdetails", id);
    try {
      const res = await deleteDoc(userDoc);
      if (!res) {
        alert("deleted successfully");
      }
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
    window.scrollTo(0, 0);
    // eslint-disable-next-line 
  }, []);

  const getUsers = async () => {
    console.log("use effect called");
    const data = await getDocs(usersCollectionref);
    console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    if (modalData) {
      setNewName(modalData.name);
      setNewEmail(modalData.email);
      setNewDesignation(modalData.designation);
      setNewEmpId(modalData.emp_id);
      // console.log(modalData);
    }
  }, [modalData]);

  return (
    <div>
      <NavBar />
      <div className="container align-items-center text-center text-sm-start p-3 mt-5">
      <div>
        <button
          className="btn btn-secondary align-items-center ms-3"
          onClick={() => {
            setShow(true);
          }}
        >
          Create User
        </button>
      </div>
      {/* createUser() ; */}
      <Container>
        <Row xs={1} md={3}>
          {users.length > 0 &&
            users.map((ele, ind) => (
              <div className="col" key={ind}>
                <div className="card card-style my-3">
                  <div
                    className="card-body border border-dark rounded-2 "
                    onClick={() => {
                      setModalData(ele);
                      setShowEdit(true);
                      setShow(true);
                    }}
                  >
                    <div key={ele.id}>
                      <h3>{ele.name}</h3>
                      <h3>{ele.emp_id}</h3>
                      {/* <button
                      onClick={() => {
                        setModalData(ele);
                        setShow(true);
                      }}
                    >
                      Show Details
                    </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {modalData && !showEdit && <Modal.Title>Edit Details</Modal.Title>}
          {!modalData && !showEdit && <Modal.Title>Create User</Modal.Title>}
          {modalData && showEdit && <Modal.Title>Employee Details</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
          {/* to show */}
          {modalData && showEdit && (
            <>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name: {newName}</Form.Label>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Designation:{newDesignation}</Form.Label>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email:{newEmail}</Form.Label>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Employee ID:{newEmpId}</Form.Label>
                </Form.Group>
              </Form>
            </>
          )}
          {/* for update */}
          {modalData && !showEdit && (
            <>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={newName}
                    onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    value={newDesignation}
                    onChange={(event) => {
                      setNewDesignation(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={newEmail}
                    onChange={(event) => {
                      setNewEmail(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    value={newEmpId}
                    onChange={(event) => {
                      setNewEmpId(event.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </>
          )}
          {/* during create */}
          {!modalData && !showEdit && (
            <>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="name..."
                    onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    placeholder="designation..."
                    onChange={(event) => {
                      setNewDesignation(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email..."
                    onChange={(event) => {
                      setNewEmail(event.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    placeholder="Emp ID..."
                    onChange={(event) => {
                      setNewEmpId(event.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              deleteUser(modalData.id);
            }}
          >
            delete
          </Button> */}
          {modalData && showEdit && (
            <>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose();
                  deleteUser(modalData.id);
                }}
              >
                delete
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose();
                  // updateUser(modalData.id);
                  setShowEdit(false);
                  setModalData(modalData);
                  setShow(true);
                }}
              >
                Edit Details
              </Button>
            </>
          )}
          {modalData && !showEdit && (
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                updateUser(modalData.id);
              }}
            >
              Save Changes
            </Button>
          )}
          {!modalData && (
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                createUser();
              }}
            >
              Create User
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

export default Employee;
