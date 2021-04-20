import { DeleteOrder } from "./DeleteOrder";

const DeleteOrderButton = ({ orderId }) => {
  return (
    <div>
      <button
        onClick={() => {
          DeleteOrder(orderId);
        }}
      >
        Remove from Cart
      </button>
    </div>
  );
};
export default DeleteOrderButton;
