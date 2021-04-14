import { CreateMediaModal } from '../Components' //should this be exported differently? 
import {useState, useEffect} from 'react'


const  Admin = () => {
  const [media, setMedia] = useState([])
  const [users, setUsers] = useState([])

  const getMedia = async() => {await fetch('http://localhost:3001/api/media', {
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
  const getUsers = async() => {await fetch('http://localhost:3001/api/home', {
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
  getMedia();
  
}, []); 
useEffect(() => {
  getUsers();
  
}, []); 
  return (
    <div>
      <div>
        <CreateMediaModal />
      </div>
      <div className="adminPanel">
        {media.map((media) => {
          <p>{media.title}</p>
        })}
      </div>
      <div className="adminPanel">
        {users.map((user) => {
          <div className="userPanel">
            <p>{user.username}</p>
              {user.isAdmin ?
                <button 
                  isAdmin={false}
                  // updateUser={updateUser}  
                >
                Remove Admin
                </button> : 
                <button 
                  isAdmin={true}>
                Make Admin
                </button>
              }
          </div>
        })}
      </div>
    </div>
  )
}
export default Admin;