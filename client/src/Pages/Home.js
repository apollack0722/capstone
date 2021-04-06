import React from 'react';
<<<<<<< HEAD
import {RegisterModal} from '../Components/index';
=======
import {RegisterModal, LoginModal} from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 6ba6cc4f01dad9a1ec721d07c23491defbbb4822

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