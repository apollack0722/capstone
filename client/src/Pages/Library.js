import { useEffect, useState } from 'react';
//make the posters responsive with class="img-fluid"
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <img src={media.imgUrl} />
                    </div>
             )
         }
    </div>
  )
}
export default Library;