import React, { useState, useEffect } from 'react';
import {Carousel} from 'react-bootstrap';

const  DemoCarousel = () =>  {
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
        <Carousel.Item>
          <img className="home-img"
            src={"https://xl.movieposterdb.com/09_10/1999/137523/xl_137523_436a6642.jpg"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-img"
            src="https://xl.movieposterdb.com/15_02/2001/227538/xl_227538_0ff5729d.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-img"
            src="https://xl.movieposterdb.com/12_12/1978/193524/xl_193524_b53370a6.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      );
  
};
export default DemoCarousel;