import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap'
const userId = localStorage.getItem("userId");
const BASE_URL = 'https://shielded-plateau-06840.herokuapp.com';

//This controls the "My Account" page...fetching a users purchased films and displaying them for viewing


const Profile = () => {
  //**REFACTOR** SET UP WATCH NOW BUTTON DO DO A THEATER OVERLAY
  const [myMedia, setMyMedia] = useState([]);


  const getOrders = async () => {
    await fetch(`${BASE_URL}/api/orders/${userId}/cart`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
      setMyMedia(result)
      })
      .catch(console.error);
  };

  getOrders(userId)
  
  
  return (
    <div>
      {myMedia.map((media, index) =>
        media.purchased === true ? (
          <div className="container" key={index}>
          <div className="cartContainer">
              <h3 className="cartTitle">{media.title}</h3>
              <img className="cartImg" src={media.imgUrl} alt="MediaImg"></img>
              <div className="cartDetails">
                <p className="cartDetail">RATING/ {media.rating}</p>
                <p className="cartDetail">
                  GENRE/ {media.genre}
                </p>
                <Button variant="outline-info">Watch Now</Button>
              </div>
          </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
export default Profile;
