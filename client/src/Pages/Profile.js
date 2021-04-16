import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../Components';
const userId = localStorage.getItem('userId');
const BASE_URL = 'http://localhost:3001';


const Profile = () => {
  const [myMedia, setMyMedia] = useState([]);
   const getMedia = async() => {
     await fetch(`${BASE_URL}/api/orders/${userId}/cart`, {
    headers: {
        'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {

       setMyMedia(result)
        console.log(result)
    })
    .catch(console.error);
  }
  useEffect (() => {
  getMedia();
   
  }, []);
console.log(myMedia)
  
    
  
  
    
  return (
    <div>
      <NavBar />
         {
             myMedia.map((media, index) => 
                media.purchased === true?
                <div className ="media-page"
                      key = {index}>
                  <h3>{media.title}</h3>
                  <p>{media.rating}</p>
                  <p>{media.genre}
                  </p>
                </div> : ''
             )
         }
    </div>

    
  )
}
export default Profile;