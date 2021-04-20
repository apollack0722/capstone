const BASE_URL = 'http://localhost:3001';
export async function DeleteOrder(orderId){
  try {
    const mediaDelete = await fetch(`${BASE_URL}/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('deleted', mediaDelete)
  } catch (error) {
    throw error;
  }
 
}
export default DeleteOrder;