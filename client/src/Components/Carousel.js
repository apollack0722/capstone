import { useState, useEffect } from 'react';
import {Carousel, Image} from 'react-bootstrap';
const BASE_URL = "https://shielded-plateau-06840.herokuapp.com"

const MainCarousel = () => {
  const [media, setMedia] = useState([]);
  const getMedia = async () => {
    await fetch(`${BASE_URL}/api/media`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMedia(result);
      })
      .catch(console.error);
  };
  useEffect(() => {
    getMedia();
  }, []);
      return (
        <div className="caroselContainer">
          <Carousel >
            {media.map((media, idx) => 
              <Carousel.Item key={idx}>
                <div className="homeImg">
                <Image
                  src={media.imgUrl}
                  alt="media-slide"
                  rounded 
                />
                </div>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      );  
};
export default MainCarousel;
