import { Modal, Button, Form } from "react-bootstrap";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = "https://arcane-sands-17213.herokuapp.com"


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function LoginUser(event) {
        fetch(`${BASE_URL}/api/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password
            })
          }).then(response => response.json())
            .then(result => {
              localStorage.setItem('token', result.token)
              localStorage.setItem('userId', result.user.id)
              localStorage.setItem('username', result.user.username)
              console.log(result.token)
              if (result.user.isAdmin) {
                return localStorage.setItem('isAdmin', result.user.isAdmin)
                }
                
            })
            .catch(console.error);
            event.preventDefault()
            setTimeout(window.location.reload.bind(window.location), 250);
        }
      
  
  return (
    <div className="Login">
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
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={LoginUser}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill out the form to Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Login />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const LoginModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="outline-info" onClick={() => setModalShow(true)}>
        Sign In
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default LoginModal;
