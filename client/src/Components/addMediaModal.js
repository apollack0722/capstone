import {Modal, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const addMedia = () => {
  const title = ''
  const description = ''
  const genre = ''
  const rentalPrice = ''
  const buyPrice = ''
  const rating = ''
  const imgUrl = ''

  function addMediaModal(event) { 
    event.preventDefault()  
    fetch('http://localhost:3001/api/admin/create', { //need to add this route
      method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          description: description,
          genre: genre,
          rentalPrice: rentalPrice,
          buyPrice: buyPrice,
          rating: rating,
          imgUrl: imgUrl
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);   
  }
  return (
    <div className="addMedia">
      <Form>
        <Form.Group controlId="mediaTitle">
          <Form.Label>Media Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Media Title" 
            onChange={ 
              (event) => {title = (event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="mediaDescription">
          <Form.Label>Media Description</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Media Description" 
            onChange={ 
              (event) => {description = (event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="mediaGenre">
          <Form.Label>Genre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Genre"
            onChange={
              (event) => {genre = (event.target.value)
              }} 
          />
        </Form.Group>
        <Form.Group controlId="rentalPrice">
          <Form.Label>Rental Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Rental Price"
            onChange={
              (event) => {rentalPrice = (event.target.value)
              }} 
          />
        </Form.Group>
        <Form.Group controlId="buyPrice">
          <Form.Label>Purchase Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Purchase Price"
            onChange={
              (event) => {purchasePrice = (event.target.value)
              }} 
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Rating"
            onChange={
              (event) => {rating = (event.target.value)
              }} 
          />
        </Form.Group>
        <Form.Group controlId="imgUrl">
          <Form.Label>Image Url</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Image Url"
            onChange={
              (event) => {imgUrl = (event.target.value)
              }} 
          />
        </Form.Group>
          <Button 
            variant="primary" 
            type="submit"
            onClick={
              (event) => {
                if(!title || !description || !genre || !rentalPrice || !buyPrice || !rating || !imgUrl ){
                  alert("please fill all fields")
                }else{/*create media here*/}
              }}
            > 
            Submit
          </Button>   
      </Form>
  </div>
  )
};

const AddMediaModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill out the form to add new Media to the store
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
const createMediaModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        Register
      </Button>
      <AddmediaModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default RegisterModal;