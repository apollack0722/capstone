import {Modal, Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateMedia = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [rentalPrice, setRentalPrice] = useState('')
  const [buyPrice, setBuyPrice] = useState('')
  const [rating, setRating] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  function submitMedia(event) {   
    fetch('http://localhost:3001/api/admin/create', {
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
        event.preventDefault()
    }
  return (
    <div className="CreateMedia">
      <Form>
        <Form.Group controlId="Username">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Title" 
            onChange={ 
              (event) => {setTitle(event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Description" 
            onChange={ 
              (event) => {setDescription(event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Genre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Genre" 
            onChange={ 
              (event) => {setGenre(event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Rental Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="$" 
            onChange={ 
              (event) => {setRentalPrice(event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Purchase Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="$" 
            onChange={ 
              (event) => {setBuyPrice(event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Rating</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="G, PG-13, R " 
            onChange={ 
              (event) => {setRating(event.target.value) 
              }}
          />
        </Form.Group>
        <Form.Group controlId="Username">
          <Form.Label>Img Url</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="ImgUrl" 
            onChange={ 
              (event) => {setImgUrl(event.target.value) 
              }}
          />
        </Form.Group>

          <Button 
            variant="primary" 
            type="submit"
            onClick={
              (event) => {!title || !description || !genre || !rentalPrice || !buyPrice || !rating || !imgUrl ? 
                alert('Please fill out the entire form. Thank you!') : submitMedia(event)}}> 
            Submit
          </Button>   
      </Form>
    </div>
  )
};

const MediaModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Fill out the form to Create Media
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateMedia />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const CreateMediaModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="outline-success" onClick={() => setModalShow(true)}>
        Create Media
      </Button>
      <MediaModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default CreateMediaModal;
