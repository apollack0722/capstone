import { DemoCarousel, Hero } from '../Components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
const  Home = () => {
    
  return (
    <div className="homeContainer">
      <div className="heroContainer">
        <Hero />
      </div>
      <div className="caroselContainer">
        <DemoCarousel />
      </div>
    </div>
  )
}
export default Home;