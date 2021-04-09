import {React, useState} from 'react';
const BASE_URL = 'https://localhost:3001';

const Cart = async (event) => {
  const [cartMedia, setCartMedia] = useState('')
  event.preventDefault();
  await fetch(`${BASE_URL}/:userid/cart`, { //BASE_URL/orders/:username/
    //use that route to call getOrderByUserId
    //if no user logged in, it checks local storage for cart instead
    //in local storage cart/items will look like mediaId1: mediaId (or by title)
    // when rendering back out of local storage use media title as the getMedia call. 
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(result => {
        setCartMedia(result.mediaId)
      })
      .catch(console.error)

let pageCart = [];
return (
  <div>
    {
      cartMedia.filter((media) => {
        if(!media.isPurchased){
          pageCart.push(media)
        }
        return pageCart
    }
      )}
      {
      pageCart.map((media, index) => {
        return (
        <div className ="cart"
          key = {index}>
          <h3>{media.title}</h3>
          <p>Purchase Price: {media.buyPrice}</p>
          <img src={media.imgUrl} alt= ''/>  
        </div>)
      })
    }
    <p>Testing cart</p>
  </div>
  )
}
export default Cart;



  
    