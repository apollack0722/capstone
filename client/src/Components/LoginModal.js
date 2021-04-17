import {Modal, Button, Form} from 'react-bootstrap';
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function LoginUser(event) {
        fetch('http://localhost:3001/api/users/login', {
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
              console.log(result);
              localStorage.setItem('token', result.token)
              localStorage.setItem('isAdmin', result.user.isAdmin)
              console.log(result.user.id)
                localStorage.setItem('userId', result.user.id)//is this showing their password? user is stored as ap
            })
            .catch(console.error);
            event.preventDefault()
        }
    return (
      <div className="Login">
        <Form>
          <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Username" 
                onChange={ (event) => { setUsername(event.target.value) }}
              />
            </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              onChange={(event)=>setPassword(event.target.value)} />
          </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
            onClick={LoginUser}
          > 
            Submit
          </Button>
        </Form>      
      </div>
  )
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
        <Button 
          onClick={props.onHide}
          >Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
  }

  const LoginModal = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="success" onClick={() => setModalShow(true)}>
        Login
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
  export default LoginModal;