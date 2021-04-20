import {RegisterModal, LoginModal, DemoCarousel, NavBar, SignOutButton} from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap'


const  Home = () => {
    

  return (
    <div>

    <div>
    <Image src={require('../Components/brand.png')} fluid/>
    </div>
      <DemoCarousel />
    </div>
  )
}
export default Home;