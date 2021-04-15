import './slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import { Card , Button, Modal} from 'react-bootstrap';
const Slider = () => {

  const [media, setMedia] = useState([])
  const [showInfo, setShowInfo] = useState(false)
  const getMedia = async() => {await fetch('http://localhost:3001/api/media', {
    headers: {
        'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {

        setMedia(result)

        
    })
    .catch(console.error);
  }
  
  useEffect(() => {
    getMedia();
    
  }, []);
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
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
    }
  return (
    
    <>
  
    <div className="container">
     
        <h2>Comedy</h2>
     { 
           media.map((media, index) => 
            media.genre === "Comedy"?
                <div 
                  className ="item"
                  key = {index}>
                  
                    <img className= 'slider-img'src={media.imgUrl} alt = '' />                
                    
                </div> : ''
             )
         }
          
  
  </div>
    <div className="container">
      <h2>Action</h2>
     { 
           media.map((media, index) => 
            media.genre === "Action"?
                <div 
                  className ="item"
                  key = {index}>
                    
                    <img className= 'slider-img'src={media.imgUrl} alt = ''/>
                </div> : ''
             )
         }
    
  </div>
    <div className="container">
      <h2>Sci-fi</h2>
     { 
           media.map((media, index) => 
            media.genre === "Sci-Fi"?
                <div 
                  className ="item"
                  key = {index}>
                    
                    <img className= 'slider-img'src={media.imgUrl} alt = ''/>
                </div> : ''
             )
         }
    
  </div>
    <div className="container">
      <h2>Family-Friendly</h2>
     { 
           media.map((media, index) => 
            media.genre === "Family Friendly"?
                <div 
                  className ="item"
                  key = {index}>
                    
                    <img className= 'slider-img'src={media.imgUrl} alt = ''/>
                </div> : ''
             )
         }
  </div>
  </>
    )
}
export default Slider;