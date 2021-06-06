import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteOrderButton, PurchaseMediaButton } from '../Components';
const userId = localStorage.getItem('userId');
const BASE_URL = 'https://shielded-plateau-06840.herokuapp.com';

const Cart = () => {
  const [myMedia, setMyMedia] = useState([]);
  useEffect (() => {
    getMedia();
    }, []);
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
console.log(myMedia) 
  return (
    <div className="altContainer">
      {myMedia.map((media, index) =>
        media.purchased === false ? (
          <div  key={index}>
            <div className="cartContainer;">
              <h3 className="cartTitle">{media.title}</h3>
              <img className="cartImg" src={media.imgUrl}></img>
              <div className="cartDetails">
                <p className="cartDetail">RATING/ {media.rating}</p>
                <p className="cartDetail">
                  GENRE/ {media.genre}
                </p>
              </div>
              <div className="buttonContainer">
                <PurchaseMediaButton
                  userId={media.userId}
                  mediaId={media.mediaId}
                />
                <DeleteOrderButton orderId={media.id} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
export default Cart;
