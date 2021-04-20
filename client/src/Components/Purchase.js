import {PurchasePatch} from './PurchasePatch';

const PurchaseMediaButton = ({userId, mediaId}) => {


  return (
    <div>
      <button onClick= {()=> {PurchasePatch(userId, mediaId)}}> Purchase </button>
    </div>
  ) 

}
export default PurchaseMediaButton;