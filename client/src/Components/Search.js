import React, { useState, useEffect } from "react";


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


   return <form id="search" onSubmit={async (event) => {
   event.preventDefault();
   console.log('hello')
  }}>
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
        }).map((activity, index) => {
        return (
          <option key={index}>{activity.title}</option>
        )
      }): null}
    </fieldset>
    
  </form>


}

export default Search;
