import { useEffect, useState } from 'react';
//make the posters responsive with class="img-fluid"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider } from '../Components';
const userId = localStorage.getItem('userId');
const BASE_URL = 'http://localhost:3001';

  const AddToCart = async(event) => {
   
      await fetch(`${BASE_URL}/api/orders/${userId}/cart`, {
        method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify()
        }).then(response => response.json())
          .then(result => {
            console.log(result);
          })
          .catch(console.error);
          event.preventDefault()
    
  }
  

const Library = () => {
  
  return (
    <div>
        <Slider />
    </div>
  )
}
export default Library;
