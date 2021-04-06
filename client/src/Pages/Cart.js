import {useState} from 'react';

const [cartMedia, setCartMedia] = useState('')

function viewCart(event) {
  event.preventDefault()
  fetch('https://localhost:3001/:username/cart', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(result => {
        setCartMedia(result.mediaId)
      })
      .then(
        fetch('https://localhost:3001') //where does this route to
      .catch(console.error)
  }

