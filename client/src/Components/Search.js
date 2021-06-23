import { useState, useEffect } from "react";
import {Button} from 'react-bootstrap';
const BASE_URL = "https://shielded-plateau-06840.herokuapp.com"

const Search = () => {
  const [media, setMedia] = useState([]);
  const [queryString, setQueryString] = useState("");

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
    <form id="search">
      <fieldset>
        <input
          id="keywords"
          type="text"
          placeholder="enter keywords..."
          value={queryString}
          onChange={(event) => {
            setQueryString(event.target.value);
          }}
        />
        {media
          ? media
              .filter((activity) => {
                if (queryString === "") {
                  return activity;
                } else return (
                  activity.title
                    .toLowerCase()
                    .includes(queryString.toLowerCase())
                    ||
                  activity.genre
                    .toLowerCase()
                    .includes(queryString.toLowerCase())
                )
              })
              .map((movie, idx) => {
                return (
                    <div className="outerContainer" key={idx}>
                    <div className="searchContainer" >
                        <div className="imgContainer">
                          <img className="searchImg" src={movie.imgUrl } alt="" />
                        </div>
                          <div className="searchOverlay">
                            <div className="cardOverlay">
                              <h3 className="movieTitle">{movie.title}</h3>
                              <hr className="hr"/>
                              <h4 className="movieDescription">{movie.description}</h4>
                              <div className="details">
                                <p className="movieDetails">RATING/ {movie.rating}</p>
                                <p className="movieDetails"> PRICE/ {movie.buyPrice}</p>
                              </div>
                              <Button variant="info">Add To Favorites</Button>
                            </div>
                          </div> 
                    </div>
                    </div>
                );
              })
          : null}
      </fieldset>
    </form>
  );
};

export default Search;



