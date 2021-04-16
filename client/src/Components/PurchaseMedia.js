const BASE_URL = 'http://localhost:3001';
export async function PurchaseMedia(userId, mediaId){
  try {
    const purchased = await fetch(`${BASE_URL}/api/orders/${userId}/${ mediaId }`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        purchased: "true"
      })
    })
    const purchased1 = await purchased.json();
    console.log('working', purchased1)
    return purchased1;
    
  } catch (error) {
    throw error;
  }
 
}
export default PurchaseMedia;