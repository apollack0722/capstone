import {React, useState} from 'react';
const BASE_URL = 'https://localhost:3001';


const userId = localStorage.getItem("userId")

// const ViewCart = async (event) => {
//   const [cartMedia, setCartMedia] = useState('')
//   event.preventDefault();
//   await fetch(`${BASE_URL}/${userId}/cart`, {
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//     }).then(response => response.json())
//       .then(result => {
//         console.log(result)
//       })
//       .catch(console.error)

// let pageCart = [];
// return (
//   <div>
//     {
//       cartMedia.filter((media) => {
//         if(!media.isPurchased){
//           pageCart.push(media)
//         }
//         return pageCart
//     }
//       )}
//       {
//       pageCart.map((media, index) => {
//         return (
//         <div className ="cart"
//           key = {index}>
//           <h3>{media.title}</h3>
//           <p>Purchase Price: {media.buyPrice}</p>
//           <img src={media.imgUrl} alt= ''/>  
//         </div>)
//       })
//     }
//     <p>Testing cart</p>
//   </div>
//   )
// }




const startCart = async (event) => {
  event.preventDefault();
  await fetch (`${BASE_URL}/orders/add_to_cart`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => response.json())
  .then(result => {
    console.log(result)
  })
  .catch(console.error)
}
//write a helper function that getsUsersOrders and determines if there is an order with isPurchased False (no fresh orders)
//if no fresh orders we create a fresh order
//if a isPurchased false exists, (an unfresh order) we patch it to add the new movies. 
//this helper function runs when a user adds to cart. 

const Cart = () => {
  return (
    <div>
      <button
        onClick={startCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Cart;


//looking at a movie. 
//click button to purchase
//that button will create a new order that is unpurchased and add that movie to a render of a cart
//that render comes from a map of my orders with isPurchased===false
