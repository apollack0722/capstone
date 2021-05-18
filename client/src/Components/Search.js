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
    <div className="searchContainer">
    
    <form id="search" className="searchBar">
      <fieldset>
        <input
          className="searchBar"
          id="keywords"
          type="text"
          placeholder="title or genre"
          value={queryString}
          onChange={(event) => {
            setQueryString(event.target.value);
          }}
        />
        <h3 className="powerText">Search for titles or genres</h3>
        {media
          ? media
              .filter((media) => {
                if (queryString === "") {
                  return null;
                } else if (
                  media.title || media.genre
                    .toLowerCase()
                    .includes(queryString.toLowerCase())
                ) {
                  return media;
                }
              })
              .map((movie, index) => {
                return (
                  <div className="outerContainer">
                  <div className="searchContainer" key={index}>
                      <div className="imgContainer">
                        <img className="searchImg" src={movie.imgUrl } alt="Card image" />
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
                            <Button variant="info">Watch Now</Button>
                          </div>
                        </div> 
                  </div>
                  </div>
                );
              })
          : null}
      </fieldset>
    </form>
    </div>
  );
};

export default Search;
