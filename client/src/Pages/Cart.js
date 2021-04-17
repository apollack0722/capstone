import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteOrderButton, NavBar, PurchaseMediaButton } from '../Components';
const userId = localStorage.getItem('userId');
const BASE_URL = 'http://localhost:3001';

const Cart = () => {
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
                media.purchased === false?
                <div className ="media-page"
                      key = {index}>
                  <h3>{media.title}</h3>
                  <p>{media.rating}</p>
                  <p>{media.genre}
                 </p>
                 {console.log('userId',media.userId)}
                 {console.log('mediaId',media.mediaId)}
                 {console.log('orderId',media.id)}
                 <PurchaseMediaButton 
                  userId = {media.userId}
                  mediaId = {media.mediaId}/>
                  <DeleteOrderButton
                  orderId = {media.id} />
                </div> : ''
             )
         }
    </div>

    
  )
}
export default Cart;
