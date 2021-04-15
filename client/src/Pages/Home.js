import {RegisterModal, LoginModal, DemoCarousel, NavBar} from '../Components/index';
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
      <NavBar />
      <h1>Home page</h1>
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