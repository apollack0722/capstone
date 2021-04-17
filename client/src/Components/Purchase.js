import { Button } from 'bootstrap';
import { useState } from 'react';
import {PurchasePatch} from './PurchasePatch';

const PurchaseMediaButton = ({userId, mediaId}) => {
// const [isPurchased, setIsPurchased] = useState(false)
  
  return (
    <div>
      <button onClick= {()=> {PurchasePatch(userId, mediaId)}}> Purchase </button>
    </div>
  ) 

}
export default PurchaseMediaButton;