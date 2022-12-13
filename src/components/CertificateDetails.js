import React, { useState, useEffect, useRef } from "react";
import {
  Row,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import "../App.css";
import { db } from "../firebase-config";
// users-Empdetails = CertifyData
// import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  // eslint-disable-next-line
  getFirestore,
} from "firebase/firestore";
import NavBar from "../Pages/NavBar";

const Certify = () => {
  console.log("firebae conn chk", db);
  const [newName, setNewName] = useState("");
  const [newCertificateNumber, setNewCertificateNumber] = useState("");
  const [dateValue, setDateValue] = useState(null);

  const [newRole, setNewRole] = useState("");
  const [newType, setNewType] = useState("");
  
  const [users, setUsers] = useState([]);

  const [showEdit, setShowEdit] = useState(false);

  const usersCollectionref = collection(db, "Certificates");

  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState();

  const handleClose = () => {
    setShow(false);
    setModalData(undefined);
    setShowEdit(false);
  };
  // const handleShow = () => setShow(true);
// eslint-disable-next-line
  const ref = useRef(null);

  const createUser = async () => {
    console.log("create user function called");
    try {
      const res = await addDoc(usersCollectionref, {
        candidate_name: newName,
        certificate_number: newCertificateNumber,

        issuer_date: dateValue,
        issuer: "Academy",
        role: newRole,
        type: newType,
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
    const certdocref = doc(db, "Certificates", id);
    await updateDoc(certdocref, {
      candidate_name: newName,
      certificate_number: newCertificateNumber,

      issuer_date: dateValue,
      issuer: "Squibix",
      role: newRole,
      type: newType,
    });
    getUsers();
    setShowEdit(false);
    console.log(id);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "Certificates", id);
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

  // console.log(users);

  useEffect(() => {

    if (modalData) {
      setNewName(modalData.candidate_name);
      setNewCertificateNumber(modalData.certificate_number);
      setDateValue(modalData.issuer_date);
      setNewRole(modalData.role);
      setNewType(modalData.type);
    }
  }, [modalData]);

  return (
    <div className="main container-fluid p-0 ">
      <NavBar />
      <div className="container align-items-center text-center text-sm-start p-3">
        <div>
          <button
            className="btn btn-secondary align-items-center ms-lg-3"
            onClick={() => {
              setShow(true);
            }}
          >
            Create User
          </button>
        </div>
        {/* createUser() ; */}
        <Container>
          <Row xs={1} md={4}>
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
                        <h3>{ele.candidate_name}</h3>
                        <h3>{ele.certificate_number}</h3>
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
            {modalData && showEdit && (
              <Modal.Title>Certificate Details</Modal.Title>
            )}
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
                    <Form.Label>
                      Certificate Number:{newCertificateNumber}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Issue Date:{dateValue}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Issuer :"Squibix Pvt Ltd"</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Role :{newRole}</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Type :{newType}</Form.Label>
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
                    <Form.Label>Certificate Number</Form.Label>
                    <Form.Control
                      value={newCertificateNumber}
                      onChange={(event) => {
                        setNewCertificateNumber(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Issuer Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={dateValue}
                      onChange={(event) => {
                        setDateValue(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Issuer </Form.Label>
                    <Form.Control value="Squibix Pvt Ltd" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      value={newRole}
                      onChange={(event) => {
                        setNewRole(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      value={newType}
                      onChange={(event) => {
                        setNewType(event.target.value);
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
                    <Form.Label>Certificate Number</Form.Label>
                    <Form.Control
                      placeholder="certificate number..."
                      onChange={(event) => {
                        setNewCertificateNumber(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="date..."
                      onChange={(event) => {
                        setDateValue(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Issuer</Form.Label>
                    <Form.Control
                      // placeholder="Issuer..."
                      value="Squbix"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      // placeholder="Issuer..."
                      placeholder="Role"
                      onChange={(event) => {
                        setNewRole(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      // placeholder="Issuer..."

                      placeholder="type..."
                      onChange={(event) => {
                        setNewType(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
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

export default Certify;
