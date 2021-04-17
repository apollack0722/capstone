import { CreateMediaModal } from '../Components' //should this be exported differently? 
import {useState, useEffect} from 'react'
import { NavBar } from "../Components";

const BASE_URL = 'http://localhost:3001/api'

const  Admin = () => {
  const [media, setMedia] = useState([])
  const [users, setUsers] = useState([])

  const getUsers = async() => {await fetch(`${BASE_URL}/users`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(async result => {
        await setUsers(result)
    }
    )
    .then(result => console.log('second result users', result))
    .then(console.log(users))
    .catch(console.error);
}

  const getMedia = async() => {await fetch(`${BASE_URL}/media`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(async result => {
      await setMedia(result)
      console.log('media is', media)   
    })
    .catch(console.error);
  }
  const editMedia = async() => {await fetch(`${BASE_URL}/admin/editMedia/${media.title}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(result => {
      console.log('sucess?', result)
    })
    .catch(console.error);
}


useEffect( async () => {
  await getUsers()
  await getMedia();
}, []); 
  return (
    <div>
      <NavBar />
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