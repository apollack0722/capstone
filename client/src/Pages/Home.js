
import {RegisterModal, LoginModal} from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Home = () => {
  return (
    <div>
      <div>
        <RegisterModal />
      </div>
      <div>
        <LoginModal />
      </div>

    </div>
  )
}
export default Home;