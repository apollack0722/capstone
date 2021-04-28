import {PurchasePatch} from './PurchasePatch';
import {Button} from 'react-bootstrap'

const PurchaseMediaButton = ({userId, mediaId}) => {
  return (
    <div>
      <Button variant="outline-info" onClick= {()=> {PurchasePatch(userId, mediaId)}}> Purchase </Button>
    </div>
  ) 
}
export default PurchaseMediaButton;