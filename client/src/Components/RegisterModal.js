import {Modal, Button, Form} from 'react-bootstrap';
import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


   /// issues registering 
    function registerUser(event) {
        
        fetch('https://localhost:3001/api/users/register', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password
              // need to add email to all functionality
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
          
            })
            .catch(console.error);
    
    
            event.preventDefault()
        }







    return (
          <div className="register">
                  <Form>
        <Form.Group controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Username" 
            onChange={(event)=>setUsername(event.target.value)}
                      />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Password"
            onChange={(event)=>setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="username" 
            placeholder="Password"
            onChange={(event)=>setConfirmPassword(event.target.value)} />
        </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
            onClick={() => {password !== confirmPassword? alert('Passwords do not match') : registerUser()}}> 
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
            Fill out the form to Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Register />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  const RegisterModal = () => {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="danger" onClick={() => setModalShow(true)}>
          Register
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default RegisterModal;