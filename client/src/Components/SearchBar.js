import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          searchTerm(event.target.value);
        }}
      />
      {media.filter((val) => {
        
        if (searchTerm === '') {
          return val
        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {

        }
      }).map((val,key) => {
        return (
          <div key={key}>
            {val.title}
            </div>
        )
      })}
    </div>
  )
}
export default SearchBar;