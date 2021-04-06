import {useState} from 'react';
const BASE_URL = 'https://localhost:3000'

const [cartMedia, setCartMedia] = useState('')

const viewCart = async (event) => {
  event.preventDefault();
  await fetch(`${BASE_URL}/:username/cart`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(result => {
        setCartMedia(result.mediaId)
      })
      .catch(console.error)
}

