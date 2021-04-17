import './slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import { Card , Button, Jumbotron} from 'react-bootstrap';
import CreateOrderButton from './CreateOrderButton';
const userId = localStorage.getItem('userId');

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
        console.log(media)
    })
    .catch(console.error);
  }
  useEffect(() => {
    getMedia();

  }, []);
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
                    
                    <input 
                      type='image'
                      className= 'slider-img'
                      src={media.imgUrl} 
                      alt = ''
                      onClick={console.log('hello')}/>
                        <CreateOrderButton 
                    purchased = {false}
                    mediaId = {media.id}
                    date = {Date()}
                    userId = {userId}
                      />
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
                    <CreateOrderButton 
                    purchased = {false}
                    mediaId = {media.id}
                    date = {Date()}
                    userId = {userId}
                      />
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
                    <CreateOrderButton 
                    purchased = {false}
                    mediaId = {media.id}
                    date = {Date()}
                    userId = {userId}
                      />
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
                    <CreateOrderButton 
                    purchased = {false}
                    mediaId = {media.id}
                    date = {Date()}
                    userId = {userId}
                      />
                </div> : ''
             )
         }
  </div>
  </>
    )
}
export default Slider;
// need to add a purchase button to each individual movie
  //Which means the purchase buttton needs to be inside the map to grab the unique id of the movie
  // maybe an onClick button, we can make a function outside which changes the isPurchased to true?
  