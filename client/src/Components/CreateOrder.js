const BASE_URL = 'http://localhost:3001';
export async function CreateOrder(userId, mediaId, date, purchased){
  try {
    const create = await fetch(`${BASE_URL}/api/orders/add_to_cart`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        mediaId: mediaId,
        date: date,
        purchased: purchased
        
    })
    })
    console.log('Created media', create)
    
  } catch (error) {
    throw error;
  }
 
}
export default CreateOrder;