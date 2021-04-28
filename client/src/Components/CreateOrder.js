const BASE_URL = "https://shielded-plateau-06840.herokuapp.com";

export async function CreateOrder(userId, mediaId, date, purchased) {
  try {
    const create = await fetch(`${BASE_URL}/api/orders/add_to_cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        mediaId: mediaId,
        date: date,
        purchased: purchased,
      }),
    });
  } catch (error) {
    throw error;
  }
}
export default CreateOrder;
