import { Button } from 'bootstrap';
import { useState } from 'react';
import {PurchaseMedia} from './PurchaseMedia';

const PurchaseMediaButton = ({mediaId, userId}) => {
// const [isPurchased, setIsPurchased] = useState(false)
  
  return (
    <div>
      <button onClick= {()=> {PurchaseMedia(mediaId, userId)}}> Purchase </button>
    </div>
  ) 

}
export default PurchaseMediaButton;