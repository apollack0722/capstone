import './slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'


const Slider = () => {
  const [media, setMedia] = useState([])
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

  return (
    
    <>
  
    <div className="container">
     { 
           media.map((media, index) => 
            media.genre === "Comedy"?
                <div 
                  className ="item"
                  key = {index}>
                    
                    <img className= 'slider-img'src={media.imgUrl} alt = ''/>
                   
                </div> : ''
             )
         }
          
  
  </div>
    <div className="container">
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