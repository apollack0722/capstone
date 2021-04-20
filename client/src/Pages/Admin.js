import { CreateMediaModal } from '../Components' //should this be exported differently? 
import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

const BASE_URL = 'http://localhost:3001'
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
        console.log('media is', media)   
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
        console.log('users are', users)   
    })
    .catch(console.error);
}
useEffect(() => {
  getUsers()
  getMedia();
}, []); 
  return (
    
      <div className="adminContainer">
        <div>
          <CreateMediaModal />
        </div>
        <div className="adminPanel">
          {media.map((media) => 
            <div className="adminMoviePanel">
             <p>{media.title}</p>
             <Button variant="outline-info">Remove </Button>
             <Button variant="outline-info">Edit </Button>
             
            </div>
          )}
        </div>
        <div className="adminPanel">
        <div>

          {users.map((user) => 
            <div className="userPanel">
              <p>{user.username}</p>
                {user.isAdmin ?
                  <Button
                    variant="outline-info" 
                    isAdmin={false}
                    // updateUser={updateUser}  
                  >
                  Remove Admin
                  </Button> : 
                  <Button
                    variant="outline-info"
                    isAdmin={true}>
                  Make Admin
                  </Button>
                }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Admin;
