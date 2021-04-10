
import {RegisterModal, LoginModal} from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
const userId = localStorage.getItem('userId')
const  Home = () => {

    const SignOut = () => {
      localStorage.removeItem('username')
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      console.log(userId)
    }



  return (
    <div>
      <div>
        <RegisterModal />
      </div>
      <div>
        <LoginModal />
      </div>
      <div>
        <button
          onClick= {SignOut}>
            Sign Out
        </button>
      </div>
     
    </div>
  )
}
export default Home;