import { useEffect, useState } from 'react';
//make the posters responsive with class="img-fluid"
import 'bootstrap/dist/css/bootstrap.min.css';
const userId = localStorage.getItem('userId');
const BASE_URL = 'http://localhost:3001';
let needNewOrder = false;
let mediaToAdd = [];
let openOrder = '';

// const CheckCart = async (event) => {
//   await fetch(`${BASE_URL}/api/orders/${userId}/cart`, {
//       method: "GET",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify()
//       }).then(response => response.json())
//         .then(result => {
//           console.log(result);

          
//           result.filter(result => {
//             if(!result.isPurchased) {
//               return openOrder = result.id 
//             }else {
//              return needNewOrder = true
//             }
//           })
//         })
//         .catch(console.error);
//         event.preventDefault()

       
//     }

  const AddToCart = async(event) => {
    if(needNewOrder) {
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
    } else {
        // await fetch(`${BASE_URL}/api/orders/${userId}/cart/${openOrder}`, {
        //   method: "PATCH",
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //     })
        //   }).then(response => response.json())
        //     .then(result => {
        //       console.log(result);
        //     })
        //     .catch(console.error);
        //     event.preventDefault()
    }
  }








const Library = () => {
  const [media, setMedia] = useState([])
  const getMedia = async() => {await fetch('http://localhost:3001/api/media', {
    headers: {
        'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {

        setMedia(result)
        
    })
    .catch(console.error);
  }
  
  useEffect(() => {
    getMedia();
    
  }, []);
  console.log(media)
  return (
    <div>
         { 
             media.map((media, index) => 
                <div className ="media-page"
                    key = {index}>
                    <h3>{media.title}</h3>
                    <p>{media.description}</p>
                    <p>{media.genre}</p>
                    <p>Rental Price: {media.rentalPrice}</p>
                    <p>Purchase Price: {media.buyPrice}</p>
                    <p>{media.rating}</p>
                    <img src={media.imgUrl} alt = ''/>
                    <button
                      mediaId = {media.id}
                      onClick = {() => {
                        AddToCart(media.id, media.)
                      }}
                      >Add to Cart
                      </button>
                    </div>
             )
         }

        
    </div>
  )
}
export default Library;
