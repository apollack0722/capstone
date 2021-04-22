import { DeleteOrder } from "./DeleteOrder";
import { Button } from 'react-bootstrap'

const DeleteOrderButton = ({ orderId }) => {
  return (
    <div>
      <Button
        variant="outline-info"
        onClick={() => {
          DeleteOrder(orderId);
        }}
      >
        Remove from Cart
      </Button>
    </div>
  );
};
export default DeleteOrderButton;
