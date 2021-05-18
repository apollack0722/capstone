const BASE_URL = 'https://shielded-plateau-06840.herokuapp.com';

export async function PurchasePatch(userId, mediaId){
  setTimeout(window.location.reload.bind(window.location), 250);
  try {
    const purchased = await fetch(`${BASE_URL}/api/orders/${userId}/${ mediaId }`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    throw error;
  }
}
export default PurchasePatch;