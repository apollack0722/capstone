import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../Components';
const userId = localStorage.getItem('userId');
const BASE_URL = 'http://localhost:3001';


const Profile = () => {
  const [myMedia, setMyMedia] = useState([]);
  // const [mediaId1, setMediaId1] = useState([]);

  
  
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


  // const getMediaById = async() => {
  //   await fetch(`${BASE_URL}/api/media/${myMedia[0].mediaId}`, {
  //   headers: {
  //       'Content-Type': 'application/json',
  //   },
  // })
  //   .then(response => response.json())
  //   .then(result => {

  //       setMediaId1(result)
  //       console.log('my getMediaById',result)
        
  //   })
  //   .catch(console.error);
  // }
 
  
console.log(myMedia)
  
    
  
  
    
  return (
    <div>
      <NavBar />
         {
             myMedia.map((media, index) => 
                <div className ="media-page"
                    key = {index}>
                    <h3>{media.title}</h3>
                    </div>
             )
         }
    </div>

    
  )
}
export default Profile;