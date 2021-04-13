import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const userId = localStorage.getItem('userId');
const BASE_URL = 'http://localhost:3001';

const Profile = () => {
  const [myMedia, setMyMedia] = useState([])
  const getMedia = async() => {await fetch(`${BASE_URL}/api/orders/${userId}/cart`, {
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
  
  useEffect(() => {
    getMedia();
    
  }, []);
  
    
  return (
    <div>
         {
             myMedia.map((media, index) => 
                <div className ="media-page"
                    key = {index}>
                    <h3>MediaId:{media.mediaId}</h3>
                    <p>{media.date}</p>
                    </div>
             )
         }
    </div>

    
  )
}
export default Profile;