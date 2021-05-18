import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap'
const userId = localStorage.getItem("userId");
const BASE_URL = "https://arcane-sands-17213.herokuapp.com";

const Profile = () => {
  const [myMedia, setMyMedia] = useState([]);
  const getMedia = async () => {
    await fetch(`${BASE_URL}/api/orders/${userId}/cart`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMyMedia(result);
      })
      .catch(console.error);
  };
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div>
      {myMedia.map((media, index) =>
        media.purchased === true ? (
          <div className="container" key={index}>
          <div className="cartContainer">
              <h3 className="cartTitle">{media.title}</h3>
              <img className="cartImg" src={media.imgUrl}></img>
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
