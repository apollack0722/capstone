import React, { useState, useEffect } from 'react';
import {Carousel} from 'react-bootstrap';

const  MainCarousel = () =>  {
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
      return (
        <Carousel>
        {media.map((media) => 
        <Carousel.Item w100>
          <img className="home-img"
            src={media.imgUrl}
            alt="media-slide"
          />
        </Carousel.Item>
        )}
      </Carousel>
      );
  
};
export default MainCarousel;