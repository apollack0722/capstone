
import { Button } from 'react-bootstrap'
const BASE_URL = 'https://shielded-plateau-06840.herokuapp.com';

const CreateOrderButton = ({ userId, mediaId, date, purchased }) => {
  const CreateOrder = async (userId, mediaId, date, purchased) => {
      await fetch(`${BASE_URL}/api/orders/add_to_cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          mediaId: mediaId,
          date: date,
          purchased: purchased,
        })
        
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
      });
    }
  return (
    <div>
      <Button
        variant="outline-info"
        onClick={() => {
          CreateOrder(userId, mediaId, date, purchased = true);
        }}
      >
        Add to List
      </Button>
    </div>
  );
};
export default CreateOrderButton;
