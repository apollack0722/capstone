const BASE_URL = 'http://localhost:3001';

export async function PurchasePatch(userId, mediaId){
  setTimeout(window.location.reload.bind(window.location), 250);

  try {
    const purchased = await fetch(`${BASE_URL}/api/orders/${userId}/${ mediaId }`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('working', purchased)
    // const purchased1 = await purchased.json();
   
    // return purchased1;
    
  } catch (error) {
    throw error;
  }
 
}
export default PurchasePatch;