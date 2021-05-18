import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const BASE_URL = "https://shielded-plateau-06840.herokuapp.com"


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function registerUser(event) {
    fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(result.token);
      })
      .catch(console.error);
    event.preventDefault();
    
  }
  return (
    <div className="register">
      <Form>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password" 
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </Form.Group>
        <Button
          variant="outline-info"
          type="submit"
          onClick={(event) => {
            password !== confirmPassword
              ? alert("Passwords do not match")
              : registerUser(event);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const RegistrationModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill out the form to Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Register />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-info" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const RegisterModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="outline-info" onClick={() => setModalShow(true)}>
        Sign Up
      </Button>
      <RegistrationModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
export default RegisterModal;
