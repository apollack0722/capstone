import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'

const Search = () => {
  const [media, setMedia] = useState([]);
  const [queryString, setQueryString] = useState('');

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


   return <form id="search">
    <fieldset>
      <input
        id="keywords"
        type="text"
        placeholder="enter keywords..."
        value={queryString}
        onChange={(event) => {setQueryString(event.target.value)}}/>
        {media ? media.filter((activity) => {
          if (queryString === '') {
            return activity;
          } else if (activity.title.toLowerCase().includes(queryString.toLowerCase())) {
            return activity }
        }).map((movie, index) => {
        return (
          <Card className="bg-dark text-white" key={index}>
  <Card.Img src={movie.imgUrl} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Card.Text>{movie.rating}</Card.Text>
    <Card.Text>{movie.buyPrice}</Card.Text>
  </Card.ImgOverlay>
</Card>
        )
      }): null}
    </fieldset>
    
  </form>


}

export default Search;
