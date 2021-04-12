// import {React, useState} from 'react';
// const BASE_URL = 'https://localhost:3001';

// const currentUser = localStorage.getItem("userId")

// // const ViewCart = async (event) => {
// //   const [cartMedia, setCartMedia] = useState('')
// //   event.preventDefault();
// //   await fetch(`${BASE_URL}/${userId}/cart`, {
// //       method: "GET",
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //     }).then(response => response.json())
// //       .then(result => {
// //         console.log(result)
// //       })
// //       .catch(console.error)

// // let pageCart = [];
// // return (
// //   <div>
// //     {
// //       cartMedia.filter((media) => {
// //         if(!media.isPurchased){
// //           pageCart.push(media)
// //         }
// //         return pageCart
// //     }
// //       )}
// //       {
// //       pageCart.map((media, index) => {
// //         return (
// //         <div className ="cart"
// //           key = {index}>
// //           <h3>{media.title}</h3>
// //           <p>Purchase Price: {media.buyPrice}</p>
// //           <img src={media.imgUrl} alt= ''/>  
// //         </div>)
// //       })
// //     }
// //     <p>Testing cart</p>
// //   </div>
// //   )
// // }


// const addToCart = async (event, mediaId, currentUser) => {
//   event.preventDefault();
//   await fetch (`${BASE_URL}/orders/add_to_cart`, {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: {
//       mediaId: mediaId,
//       currentUser: currentUser 
//     }
//   }).then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })
//   .catch(console.error)
// }

// const Cart = () => {
//   return (
//     <div>
//       <button
//         onClick={startCart}
//       >
//         Add to Cart
//       </button>
//     </div>
//   )
// }

// export default Cart;


// //looking at a movie. 
// //click button to purchase
// //that button will create a new order that is unpurchased and add that movie to a render of a cart
// //that render comes from a map of my orders with isPurchased===false
