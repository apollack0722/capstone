import { useState} from 'react';
const BASE_URL = 'https://localhost:3001/api';
const currentUser = localStorage.getItem("userId")

const Cart =  () => {  //dont forget to re-add async
  console.log(currentUser)
  const [cartMedia, setCartMedia] = useState([])
  fetch(`${BASE_URL}/orders`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(result => setCartMedia(result) )
      .catch(console.error)
      const myCart = cartMedia.filter( cartMedia => cartMedia.userId === currentUser && !cartMedia.isPurchased)
  return (
    

    <div>
      <div>
      "HOWDY"
        <p>Testing cart</p>
        <h3>{myCart[0].id}</h3>
      </div>
    </div>
  )
}

export default Cart;


//looking at a movie. 
//click button to purchase
//that button will create a new order that is unpurchased and add that movie to a render of a cart
//that render comes from a map of my orders with isPurchased===false
