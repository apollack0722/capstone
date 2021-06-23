import { CreateMediaModal } from '../Components' //should this be exported differently? 
import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'


const BASE_URL = 'https://shielded-plateau-06840.herokuapp.com'

const  Admin = () => {
  const [media, setMedia] = useState([])
  const [users, setUsers] = useState([])
  const getMedia = async() => {await fetch(`${BASE_URL}/api/media`, {
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
  const getUsers = async() => {await fetch(`${BASE_URL}/api/users`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(result => {
        setUsers(result) 
    })
    .catch(console.error);
}
useEffect(() => {
  getUsers()
  getMedia();
}, []); 
  return (
    
      <div className="adminContainer">
        <div className="createButton">
        
          <CreateMediaModal />
        </div>
        <div className="adminPanel">
          {media.map((media, idx) => 
            <div className="adminMoviePanel" key={idx}>
            <p className="movieTitle">{media.title}</p>
            <img className="adminImg" src={media.imgUrl} alt="media"></img>
            <div className="buttonContainer">
              <Button variant="info">Remove </Button>
              <Button variant="info">Edit </Button>
            </div> 
        </div>
          )}
        </div>
        <div className="adminPanel">
        <div>
          {users.map((user, idx) => 
            <div className="userPanel" key={idx}>
              <p>{user.username}</p>
                {user.isadmin ?
                  <Button
                    variant="info" 
                    isadmin={0}
                    // updateUser={updateUser}  
                  >
                  Remove Admin
                  </Button> : 
                  <Button
                    variant="info"
                    isadmin={1}>
                  Make Admin
                  </Button>
                }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Admin;
