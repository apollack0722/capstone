//blocker: returnedMedia is undefined. Maybe this is from my fetch call failing? 
//check this code for reference https://github.com/Cawde/FitnessTrackerFE/blob/main/fitness-tracker-fe/src/Components/Activity.js


import {useState, useEffect} from 'react';
const BASE_URL = 'https://localhost:3000'

const Library = () => {
  const [mediaResults, setMediaResults] = useState('')
  const [searchTerm, setSearchTerm] = useState(null)
  
  const fetchLibrary = async (event) => {
    event.preventDefault()
    await fetch(`${BASE_URL}/media`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => response.json())
        .then(result => {
          setMediaResults(result)
          console.log(result)} 
          )
        .catch(console.error)
    }
    useEffect(() => {
      fetchLibrary();
    }, [setMediaResults]);
    console.log(mediaResults)
    
    let returnedMedia = mediaResults.values; //only use if mediaResults returns as an object. 
    returnedMedia.filter((media) => {
      if (searchTerm === '') {
        return media;
      } else if (media.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return media }
      }).map((media, index) => {
        return (
          <div className="mediaCard" key={index} > 
            <h2>media.title</h2>
            <h3>media.desctiption</h3>
          </div> 
        )
      }
    )
}

export default Library;

