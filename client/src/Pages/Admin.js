import { CreateMediaModal } from "../Components";
import { useState, useEffect } from "react";


const BASE_URL = "http://localhost:3001";

const Admin = () => {
  const [media, setMedia] = useState([]);
  const [users, setUsers] = useState([]);
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
  const getUsers = async () => {
    await fetch(`${BASE_URL}/api/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      })
      .catch(console.error);
  };
  useEffect(() => {
    getUsers();
    getMedia();
  }, []);

  return (
    <div>
      <div>
        <CreateMediaModal />
      </div>
      <div className="adminContainer">
        <div className="adminPanel">
          {media.map((media) => (
            <p>{media.title}</p>
          ))}
        </div>
        <div className="adminPanel">
          {users.map((user) => (
            <div className="userPanel">
              <p>{user.username}</p>
              {user.isAdmin ? (
                <button isAdmin={false}>Remove Admin</button>
              ) : (
                <button isAdmin={true}>Make Admin</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Admin;
