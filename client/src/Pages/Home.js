import {RegisterModal, LoginModal, DemoCarousel, NavBar} from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap'


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
    <Image src="../Components/pineapple.png" fluid/>
    </div>
      <DemoCarousel />
    </div>
  )
}
export default Home;