import {CreateOrder} from './CreateOrder';

const CreateOrderButton = ({userId, mediaId, date, purchased}) => {
  
  return (
    <div>
      <button onClick= {()=> {CreateOrder(userId, mediaId, date, purchased)}}>Add to cart</button>
    </div>
  ) 

}
export default CreateOrderButton;