import { CreateOrder } from "./CreateOrder";
import { Button } from 'react-bootstrap'

const CreateOrderButton = ({ userId, mediaId, date, purchased }) => {
  return (
    <div>
      <Button
        variant="outline-info"
        onClick={() => {
          CreateOrder(userId, mediaId, date, purchased);
        }}
      >
        Watch Now
      </Button>
    </div>
  );
};
export default CreateOrderButton;
