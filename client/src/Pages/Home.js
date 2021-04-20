import {RegisterModal, LoginModal, DemoCarousel, NavBar} from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';


const  Home = () => {
    const SignOut = () => {
      localStorage.removeItem('username')
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      localStorage.removeItem('isAdmin')
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
      <DemoCarousel />
     
    </div>
  )
}
export default Home;